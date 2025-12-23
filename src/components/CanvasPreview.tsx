// src/components/CanvasPreview.tsx
import React, { useEffect, useState } from 'react';
import type { Part } from '../types';
import { resampleToSize } from '../utils/image';

interface Props {
    selections: Record<string, Part | undefined>;
    svgRef?: React.RefObject<SVGSVGElement>;
    size?: number; // internal canvas size (1080)
}

const order = ['backgrounds', 'bodies', 'eyes', 'heads', 'mouths', 'stickers'];

export default function CanvasPreview({ selections, svgRef, size = 1080 }: Props) {
    // map partId => dataURL (resampled to `size`)
    const [resolved, setResolved] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let cancelled = false;
        async function prepare() {
            setLoading(true);
            const parts = order.map((cat) => selections[cat]).filter(Boolean) as Part[];
            // resample each unique src once
            const unique = Array.from(new Map(parts.map((p) => [p.src, p])).values());
            const map: Record<string, string> = {};
            await Promise.all(unique.map(async (p) => {
                try {
                    const dataUrl = await resampleToSize(p.src, size);
                    map[p.src] = dataUrl;
                } catch (err) {
                    // fallback: use original src if resample fails
                    map[p.src] = p.src;
                    console.error('resample failed for', p.id, err);
                }
            }));
            if (!cancelled) {
                setResolved(map);
                setLoading(false);
            }
        }
        prepare();
        return () => { cancelled = true; };
    }, [selections, size]);

    return (
        <div style={{
            background: '#fff',
            borderRadius: 12,
            padding: 12,
            boxShadow: '0 6px 18px rgba(2,6,23,0.06)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: `${size}px` }}>
                {loading && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                        <div style={{ padding: 8, background: 'rgba(255,255,255,0.9)', borderRadius: 8, fontSize: 13 }}>Preparing preview…</div>
                    </div>
                )}

                <svg
                    ref={svgRef}
                    viewBox={`0 0 ${size} ${size}`}
                    width="100%"
                    style={{ display: 'block', height: 'auto' }}
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Meme pfp preview"
                >
                    {order.map((category) => {
                        const p = selections[category];
                        if (!p) return null;
                        const src = resolved[p.src] ?? p.src;

                        // Always use full canvas for centered images
                        return (
                            <image
                                key={p.id}
                                href={src}
                                x={0}
                                y={0}
                                width={size}
                                height={size}
                                preserveAspectRatio="xMidYMid meet"  // Changed to "meet" to maintain aspect ratio
                            />
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}
