// src/App.tsx
import { useMemo, useRef, useState } from 'react';
import { PARTS, CATEGORIES } from './data/parts';
import type { Part } from './types';
import CanvasPreview from './components/CanvasPreview';
import Selector from './components/Selector';
import Controls from './components/Controls';
import { pickRandom } from './utils/random';
import { resampleToSize } from './utils/image';



export default function App() {
  const svgRef = useRef<SVGSVGElement>(null!);

  const partsByCategory = useMemo(() => {
    const map: Record<string, Part[]> = {};
    PARTS.forEach((p) => {
      if (!map[p.category]) map[p.category] = [];
      map[p.category].push(p);
    });
    return map;
  }, []);

  const initialSelections: Record<string, Part | undefined> = {};
  CATEGORIES.forEach((cat) => {
    initialSelections[cat] = partsByCategory[cat]?.[0];
  });

  const [selections, setSelections] = useState<Record<string, Part | undefined>>(initialSelections);
  const [randomizeFlags, setRandomizeFlags] = useState<Record<string, boolean>>(() => {
    const r: Record<string, boolean> = {};
    CATEGORIES.forEach((c) => (r[c] = false));
    return r;
  });

  function handleSelect(category: string, partId: string) {
    const p = partsByCategory[category].find((x) => x.id === partId);
    setSelections((s) => ({ ...s, [category]: p }));
    setRandomizeFlags((r) => ({ ...r, [category]: false }));
  }

  function handleToggleRandomize(category: string, next: boolean) {
    setRandomizeFlags((r) => ({ ...r, [category]: next }));
  }

  function randomizeAll() {
    setSelections((s) => {
      const next: Record<string, Part | undefined> = { ...s };
      CATEGORIES.forEach((cat) => {
        if (randomizeFlags[cat]) {
          next[cat] = pickRandom(partsByCategory[cat]);
        }
      });
      return next;
    });
  }

  function reset() {
    setSelections(initialSelections);
    setRandomizeFlags(() => {
      const nr: Record<string, boolean> = {};
      CATEGORIES.forEach((c) => (nr[c] = false));
      return nr;
    });
  }

  async function downloadPNG() {
    try {
      const size = 1080;
      const orderList = ['backgrounds', 'bodies', 'eyes', 'heads', 'mouths', 'stickers'];

      const selectedParts = orderList
        .map((cat) => selections[cat])
        .filter(Boolean) as (Part & { bbox?: { x: number; y: number; w: number; h: number } })[];

      // For each selected part we want an embedded PNG dataURL sized to `size`.
      // Use resampled image (which returns a dataURL sized to full canvas).
      // If you want parts to appear in their bbox (not full-bleed), we will crop with pixel coords via SVG <image> placement.
      const dataUrls = await Promise.all(selectedParts.map(async (p) => {
        try {
          // resample whole asset to size x size (so its pixels = export canvas).
          // This keeps quality consistent. If your assets already are 1080, this is fast.
          return await resampleToSize(p.src, size);
        } catch (err) {
          console.warn('resample error, falling back to original src', p.id, err);
          // fallback: convert original src to data URL via fetch
          const r = await fetch(p.src);
          const b = await r.blob();
          return await new Promise<string>((resolve, reject) => {
            const fr = new FileReader();
            fr.onload = () => resolve(fr.result as string);
            fr.onerror = reject;
            fr.readAsDataURL(b);
          });
        }
      }));

      // Build SVG markup using each part's bbox (pixel coords) but the image href is a full-size dataURL.
      const imagesMarkup = selectedParts.map((p, i) => {
        const dataUrl = dataUrls[i];
        if (p.bbox) {
          const x = Math.round(p.bbox.x * size);
          const y = Math.round(p.bbox.y * size);
          const w = Math.round(p.bbox.w * size);
          const h = Math.round(p.bbox.h * size);
          return `<image href="${dataUrl}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" />`;
        } else {
          return `<image href="${dataUrl}" x="0" y="0" width="${size}" height="${size}" preserveAspectRatio="xMidYMid slice" />`;
        }
      }).join('\n');

      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${imagesMarkup}</svg>`;
      const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;

      const img = new Image();
      img.src = svgDataUrl;
      await new Promise<void>((resolve, reject) => { img.onload = () => resolve(); img.onerror = (e) => reject(e); });

      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('2D context not available');

      ctx.drawImage(img, 0, 0, size, size);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `meme-pfp-${size}x${size}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/png');

    } catch (err) {
      console.error('Failed to export PNG', err);
      alert('Export failed — check console for details. If images are hosted on another domain, CORS may block export.');
    }
  }


  // ----------------------

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl">
        {/* LEFT: Selectors (narrow) */}
        <aside className="col-span-12 md:col-span-4">
          <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
            <h2 className="text-lg font-semibold mb-2">Traits</h2>
            {CATEGORIES.map((cat) => (
              <div key={cat} className="bg-slate-50 rounded-md">
                <Selector
                  category={cat}
                  parts={partsByCategory[cat] || []}
                  selectedId={selections[cat]?.id}
                  onSelect={(pid) => handleSelect(cat, pid)}
                  randomizeEnabled={!!randomizeFlags[cat]}
                  onToggleRandomize={handleToggleRandomize}
                />
              </div>
            ))}
            <div className="mt-3 text-sm text-slate-600">
              Tip: use the Randomize checkbox per category, then press <strong>Randomize</strong>.
            </div>
          </div>
        </aside>

        {/* RIGHT: Preview + controls (wide) */}
        <main className="col-span-12 md:col-span-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl font-bold">Meme PFP Maker</h1>
              <div className="text-sm text-slate-500">Preview & Export</div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {/* Preview box */}
                <CanvasPreview selections={selections} svgRef={svgRef} size={1080} />
              </div>

              <div className="flex flex-col gap-4">
                {/* Controls */}
                <Controls onRandomizeAll={randomizeAll} onReset={reset} onDownload={downloadPNG} />

                {/* Quick summary of selections */}
                <div className="p-3 border rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2">Current selection</h3>
                  <ul className="text-sm space-y-1">
                    {CATEGORIES.map((cat) => (
                      <li key={cat} className="flex justify-between">
                        <span className="capitalize">{cat}</span>
                        <span className="text-slate-700">
                          {selections[cat]?.name ?? <span className="text-slate-400">—</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Export note */}
                <div className="text-xs text-slate-500">
                  Export resolution: <strong>1080×1080</strong>. Preview resolution: 1080×1080.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
