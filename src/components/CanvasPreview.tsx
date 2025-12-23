// src/components/CanvasPreview.tsx
import React, { useEffect, useState } from "react";
import type { Part } from "../types";
import { resampleToSize } from "../utils/image";

interface Props {
  selections: Record<string, Part | undefined>;
  svgRef?: React.RefObject<SVGSVGElement>;
  size?: number;
}

const order = ["backgrounds", "bodies", "eyes", "heads", "mouths", "stickers"];

export default function CanvasPreview({
  selections,
  svgRef,
  size = 1080,
}: Props) {
  const [resolved, setResolved] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function prepare() {
      setLoading(true);
      const parts = order
        .map((cat) => selections[cat])
        .filter(Boolean) as Part[];
      const unique = Array.from(new Map(parts.map((p) => [p.src, p])).values());
      const map: Record<string, string> = {};
      await Promise.all(
        unique.map(async (p) => {
          try {
            const dataUrl = await resampleToSize(p.src, size);
            map[p.src] = dataUrl;
          } catch (err) {
            map[p.src] = p.src;
            console.error("resample failed for", p.id, err);
          }
        })
      );
      if (!cancelled) {
        setResolved(map);
        setLoading(false);
      }
    }
    prepare();
    return () => {
      cancelled = true;
    };
  }, [selections, size]);

  return (
    <div
      className="
            relative
            bg-white
            rounded-2xl
            p-4
            border-4 border-white
            ring-2 ring-usa-red/30
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            overflow-hidden
            hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)]
            transition-shadow duration-300
        "
    >
      {/* Halftone overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] [background-size:16px_16px] opacity-10" />
      </div>

      {loading && (
        <div
          className="
                    absolute inset-0
                    flex items-center justify-center
                    z-10
                    bg-white/90 backdrop-blur-sm
                    rounded-2xl
                "
        >
          <div
            className="
                        px-4 py-3
                        bg-gradient-to-r from-usa-red to-usa-blue
                        text-white
                        font-bold
                        rounded-xl
                        animate-pulse
                    "
          >
            Loading patriotic preview...
          </div>
        </div>
      )}

      {/* Preview label */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20">
        <div
          className="
                    bg-yellow-300 text-black
                    text-xs font-bold
                    px-3 py-1
                    rounded-full
                    shadow-md
                    rotate-[-2deg]
                "
        >
          LIVE PREVIEW
        </div>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        className="
                    block
                    rounded-xl
                    border-2 border-usa-blue/20
                    shadow-inner
                    relative z-0
                "
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Meme PFP preview"
      >
        {order.map((category) => {
          const p = selections[category];
          if (!p) return null;
          const src = resolved[p.src] ?? p.src;

          return (
            <image
              key={p.id}
              href={src}
              x={0}
              y={0}
              width={size}
              height={size}
              preserveAspectRatio="xMidYMid meet"
            />
          );
        })}
      </svg>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 text-xl wiggle-star">⭐</div>
      <div className="absolute top-2 right-2 text-xl wiggle-star">⭐</div>
    </div>
  );
}
