// src/types.ts

export type Category =
  | 'backgrounds'
  | 'bodies'
  | 'eyes'
  | 'heads'
  | 'mouths'
  | 'stickers';

export interface BBox {
  x: number; // normalized 0..1
  y: number; // normalized 0..1
  w: number; // normalized 0..1
  h: number; // normalized 0..1
}

export interface Part {
  id: string;
  name: string;
  category: Category;
  // raster image URL (imported)
  src: string;
  // optional small thumbnail (can reuse src)
  thumbnail?: string;
  // optional layer order override (smaller = rendered first)
  order?: number;
  // normalized bounding box on the master canvas (0..1)
  bbox?: BBox;
}
