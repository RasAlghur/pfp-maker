// src/data/parts.ts

import bg1 from '../assets/backgrounds/burning_server_bg.png';
import bg2 from '../assets/backgrounds/green_candle_bg.png';
import bg3 from '../assets/backgrounds/grove_street_bg.png';
import bg4 from '../assets/backgrounds/jail_cell_bg.png';
import bg5 from '../assets/backgrounds/matrix_code_bg.png';

import body1 from '../assets/bodies/classic_body.png';
import body2 from '../assets/bodies/ghost_body.png'
import body3 from '../assets/bodies/glitch_body.png';
import body4 from '../assets/bodies/holographic_body.png';
import body5 from '../assets/bodies/naked_body.png';

import eyes1 from '../assets/eyes/anime_eye.png';
import eyes2 from '../assets/eyes/censored_eye.png';
import eyes3 from '../assets/eyes/dead_eye.png';
import eyes4 from '../assets/eyes/hypnotized_eye.png';
import eyes5 from '../assets/eyes/laser_eye.png';

import head1 from '../assets/heads/blood_bandage_head.png';
import head2 from '../assets/heads/crown_head.png';
import head3 from '../assets/heads/fud_police_head.png';
import head4 from '../assets/heads/headset_head.png';
import head5 from '../assets/heads/mcdonald_head.png';
import head6 from '../assets/heads/propeller_head.png';

import mouth1 from '../assets/mouths/blunt_mouth.png';
import mouth2 from '../assets/mouths/cigarette_mouth.png';
import mouth3 from '../assets/mouths/grillz_mouth.png';
import mouth4 from '../assets/mouths/rose_mouth.png';
import mouth5 from '../assets/mouths/toothpick_mouth.png';
import mouth6 from '../assets/mouths/pacifier_mouth.png';

import sticker1 from '../assets/stickers/band-aid-sticker.png';
import sticker2 from '../assets/stickers/dev_sticker.png';
import sticker3 from '../assets/stickers/gm_sticker.png';
import sticker4 from '../assets/stickers/jeet_sticker.png';
import sticker5 from '../assets/stickers/looks_rare_sticker.png';
import sticker6 from '../assets/stickers/ngmmi_sticker.png';
import sticker7 from '../assets/stickers/wagmi_sticker.png';

import type { Part } from '../types';

const FULL_BBOX = { x: 0, y: 0, w: 1, h: 1 };

export const PARTS: Part[] = [
    // ============ BACKGROUNDS ============
    // Full bleed - covers entire 1080x1080 canvas
    {
        id: 'bg1',
        name: 'Burning Server',
        category: 'backgrounds',
        src: bg1,
        thumbnail: bg1,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg2',
        name: 'Green Candle',
        category: 'backgrounds',
        src: bg2,
        thumbnail: bg2,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg3',
        name: 'Grove Street',
        category: 'backgrounds',
        src: bg3,
        thumbnail: bg3,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg4',
        name: 'Jail Cell',
        category: 'backgrounds',
        src: bg4,
        thumbnail: bg4,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg5',
        name: 'Matrix Code',
        category: 'backgrounds',
        src: bg5,
        thumbnail: bg5,
        order: 0,
        bbox: FULL_BBOX
    },

    // ============ BODIES ============
    // Torso/body area - all bodies should be designed to fit this region
    {
        id: 'body1',
        name: 'Classic Body',
        category: 'bodies',
        src: body1,
        thumbnail: body1,
        order: 1,
        bbox: FULL_BBOX
    },
    {
        id: 'body2',
        name: 'Ghost Body',
        category: 'bodies',
        src: body2,
        thumbnail: body2,
        order: 1,
        bbox: FULL_BBOX
    },
    {
        id: 'body3',
        name: 'Glitch Body',
        category: 'bodies',
        src: body3,
        thumbnail: body3,
        order: 1,
        bbox: FULL_BBOX
    },
    {
        id: 'body4',
        name: 'Holographic Body',
        category: 'bodies',
        src: body4,
        thumbnail: body4,
        order: 1,
        bbox: FULL_BBOX
    },
    {
        id: 'body5',
        name: 'Naked Body',
        category: 'bodies',
        src: body5,
        thumbnail: body5,
        order: 1,
        bbox: FULL_BBOX
    },

    // ============ HEADS ============
    // Head area - all heads use same bbox for consistent swapping
    {
        id: 'head1',
        name: 'Bandage Head',
        category: 'heads',
        src: head1,
        thumbnail: head1,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head2',
        name: 'Crown Head',
        category: 'heads',
        src: head2,
        thumbnail: head2,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head3',
        name: 'Fud Police Head',
        category: 'heads',
        src: head3,
        thumbnail: head3,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head4',
        name: ' Headset Head',
        category: 'heads',
        src: head4,
        thumbnail: head4,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head5',
        name: 'Mcdonald Head',
        category: 'heads',
        src: head5,
        thumbnail: head5,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head6',
        name: 'Propeller Head',
        category: 'heads',
        src: head6,
        thumbnail: head6,
        order: 2,
        bbox: FULL_BBOX
    },

    // ============ EYES ============
    // Eye region on the face
    {
        id: 'eyes1',
        name: 'Anime Eyes',
        category: 'eyes',
        src: eyes1,
        thumbnail: eyes1,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes2',
        name: 'Censored Eyes',
        category: 'eyes',
        src: eyes2,
        thumbnail: eyes2,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes3',
        name: 'Dead Eyes',
        category: 'eyes',
        src: eyes3,
        thumbnail: eyes3,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes4',
        name: 'Hypnotized Eyes',
        category: 'eyes',
        src: eyes4,
        thumbnail: eyes4,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes5',
        name: 'Laser Eyes',
        category: 'eyes',
        src: eyes5,
        thumbnail: eyes5,
        order: 3,
        bbox: FULL_BBOX
    },

    // ============ MOUTHS ============
    // Mouth region below eyes
    {
        id: 'mouth1',
        name: 'Blunt',
        category: 'mouths',
        src: mouth1,
        thumbnail: mouth1,
        order: 4,
        bbox: FULL_BBOX
    },
    {
        id: 'mouth2',
        name: 'Cigarette',
        category: 'mouths',
        src: mouth2,
        thumbnail: mouth2,
        order: 4,
        bbox: FULL_BBOX
    },
    {
        id: 'mouth3',
        name: 'Gold Grillz',
        category: 'mouths',
        src: mouth3,
        thumbnail: mouth3,
        order: 4,
        bbox: FULL_BBOX
    },
    {
        id: 'mouth4',
        name: 'rose',
        category: 'mouths',
        src: mouth4,
        thumbnail: mouth4,
        order: 4,
        bbox: FULL_BBOX
    },
    {
        id: 'mouth5',
        name: 'toothpick',
        category: 'mouths',
        src: mouth5,
        thumbnail: mouth5,
        order: 4,
        bbox: FULL_BBOX
    },
    {
        id: 'mouth6',
        name: 'Pacifier',
        category: 'mouths',
        src: mouth6,
        thumbnail: mouth6,
        order: 4,
        bbox: FULL_BBOX
    },

    // ============ STICKERS ============
    // Overlay decorations - can have varying positions for visual interest
    {
        id: 'sticker1',
        name: 'Band-aid',
        category: 'stickers',
        src: sticker1,
        thumbnail: sticker1,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker2',
        name: 'Dev Sticker',
        category: 'stickers',
        src: sticker2,
        thumbnail: sticker2,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker3',
        name: 'gm Sticker',
        category: 'stickers',
        src: sticker3,
        thumbnail: sticker3,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker4',
        name: 'jeet Sticker',
        category: 'stickers',
        src: sticker4,
        thumbnail: sticker4,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker5',
        name: 'look rare Sticker',
        category: 'stickers',
        src: sticker5,
        thumbnail: sticker5,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker6',
        name: 'ngmi Sticker',
        category: 'stickers',
        src: sticker6,
        thumbnail: sticker6,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker7',
        name: 'wagmi Sticker',
        category: 'stickers',
        src: sticker7,
        thumbnail: sticker7,
        order: 5,
        bbox: FULL_BBOX
    },
];

export const CATEGORIES = ['backgrounds', 'bodies', 'heads', 'eyes', 'mouths', 'stickers'] as const;
export type Category = typeof CATEGORIES[number];

// Optional: Export the bboxes if you need them elsewhere
export { FULL_BBOX };