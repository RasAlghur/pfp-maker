// src/App.tsx
import { useMemo, useRef, useState } from "react";
import { PARTS, CATEGORIES } from "./data/parts";
import type { Part } from "./types";
import CanvasPreview from "./components/CanvasPreview";
import Selector from "./components/Selector";
import Controls from "./components/Controls";
import { pickRandom } from "./utils/random";
import { resampleToSize } from "./utils/image";
import { BsSliders } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";

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

  const [selections, setSelections] =
    useState<Record<string, Part | undefined>>(initialSelections);
  const [randomizeFlags, setRandomizeFlags] = useState<Record<string, boolean>>(
    () => {
      const r: Record<string, boolean> = {};
      CATEGORIES.forEach((c) => (r[c] = false));
      return r;
    }
  );

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
      const orderList = [
        "backgrounds",
        "bodies",
        "eyes",
        "heads",
        "mouths",
        "stickers",
      ];

      const selectedParts = orderList
        .map((cat) => selections[cat])
        .filter(Boolean) as (Part & {
        bbox?: { x: number; y: number; w: number; h: number };
      })[];

      const dataUrls = await Promise.all(
        selectedParts.map(async (p) => {
          try {
            return await resampleToSize(p.src, size);
          } catch (err) {
            console.warn(
              "resample error, falling back to original src",
              p.id,
              err
            );
            const r = await fetch(p.src);
            const b = await r.blob();
            return await new Promise<string>((resolve, reject) => {
              const fr = new FileReader();
              fr.onload = () => resolve(fr.result as string);
              fr.onerror = reject;
              fr.readAsDataURL(b);
            });
          }
        })
      );

      const imagesMarkup = selectedParts
        .map((p, i) => {
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
        })
        .join("\n");

      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${imagesMarkup}</svg>`;
      const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
        svgString
      )}`;

      const img = new Image();
      img.src = svgDataUrl;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = (e) => reject(e);
      });

      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("2D context not available");

      ctx.drawImage(img, 0, 0, size, size);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `meme-pfp-${size}x${size}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } catch (err) {
      console.error("Failed to export PNG", err);
      alert("Export failed — check console for details.");
    }
  }

  return (
    <div
      className="min-h-screen bg-linear-to-br
        from-usa-red/15
        via-usa-blue/15
        to-yellow-300/20 p-4 lg:p-6 font-body"
    >
      {/* Halftone background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-size-[24px_24px] opacity-10" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 lg:mb-12 text-center animate-fade-up">
          <h1 className="font-display font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl mb-3">
            <span
              className="
    bg-gradient-to-r from-red-600 to-blue-600
    bg-clip-text text-transparent
    drop-shadow-[2px_2px_0_#fff]
  "
            >
              MEME PFP GENERATOR
            </span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* LEFT: Traits Selector */}
          <aside className="lg:col-span-4">
            <div
              className="
              bg-white/90 backdrop-blur-sm
              rounded-2xl
              border-2 border-usa-blue/20
              shadow-[0_12px_40px_rgba(0,0,0,0.15)]
              p-5 lg:p-6
              space-y-4
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]
              transition-shadow duration-300
            "
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="
                  bg-linear-to-r from-usa-red to-usa-blue
                  p-2 rounded-xl
                  -rotate-2
                "
                >
                  <span className="text-2xl">
                    <BsSliders className="text-red-500 text-xl" />
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Traits
                </h2>
              </div>

              {CATEGORIES.map((cat) => (
                <div
                  key={cat}
                  className="
                  bg-secondary/70
                  rounded-xl
                  border border-usa-blue/10
                  overflow-hidden
                  hover:border-usa-blue/30
                  transition-all duration-200
                "
                >
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

              {/* Tip */}
              <div
                className="
                mt-6 p-4
                bg-linear-to-r from-usa-blue/5 to-usa-red/5
                border border-usa-blue/20
                rounded-xl
                text-sm text-muted-foreground
              "
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">
                    <FaLightbulb className="text-yellow-500 text-xl" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Pro Tip
                    </p>
                    <p>
                      Enable <strong>Randomize</strong> for traits you want to
                      randomize, then hit the Randomize button!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: Preview & Controls */}
          <main className="lg:col-span-8">
            <div
              className="
              bg-white/90 backdrop-blur-sm
              rounded-2xl
              border-2 border-usa-blue/20
              shadow-[0_12px_40px_rgba(0,0,0,0.15)]
              p-5 lg:p-6
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]
              transition-shadow duration-300
            "
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Preview Box */}
                <div className="flex flex-col gap-4">
                  <CanvasPreview
                    selections={selections}
                    svgRef={svgRef}
                    size={1080}
                  />
                </div>

                {/* Controls & Info */}
                <div className="flex flex-col gap-6">
                  {/* Controls */}
                  <div
                    className="
                    p-5
                    bg-linear-to-br from-secondary to-background
                    rounded-xl
                    border border-usa-blue/20
                  "
                  >
                    <h4 className="font-display font-bold text-lg mb-4">
                      Actions
                    </h4>
                    <Controls
                      onRandomizeAll={randomizeAll}
                      onReset={reset}
                      onDownload={downloadPNG}
                    />
                  </div>

                  {/* Current Selection */}
                  <div
                    className="
                    p-5
                    bg-white
                    rounded-xl
                    border-2 border-usa-blue/30
                    shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                  "
                  >
                    <h4
                      className="
                      font-display font-bold text-lg mb-4
                      flex items-center gap-2
                    "
                    >
                      <span
                        className="
                        bg-linear-to-r from-usa-red to-usa-blue
                        w-2 h-6 rounded-full
                      "
                      />
                      Current Selection
                    </h4>
                    <ul className="space-y-3">
                      {CATEGORIES.map((cat) => (
                        <li
                          key={cat}
                          className="
                          flex items-center justify-between
                          p-2
                          bg-secondary/50
                          rounded-lg
                          hover:bg-secondary/80
                          transition-colors duration-200 text-black
                        "
                        >
                          <span
                            className="
                            font-medium capitalize
                            text-sm
                          "
                          >
                            {cat}
                          </span>
                          <span
                            className="
                            font-bold
                           
                            text-sm
                          "
                          >
                            {selections[cat]?.name ?? "—"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Made with <span className="text-usa-red">❤️</span> and{" "}
            <span className="text-usa-blue">🦅 FREEDOM 🦅</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
