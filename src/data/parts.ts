// src/data/parts.ts

import bg1 from '../assets/backgrounds/burning_server_bg.png';
import bg2 from '../assets/backgrounds/green_candle_bg.png';
import bg3 from '../assets/backgrounds/grove_street_bg.png';
import bg4 from '../assets/backgrounds/jail_cell_bg.png';
import bg5 from '../assets/backgrounds/matrix_code_bg.png';
import bg6 from '../assets/backgrounds/basement_bg.png';
import bg7 from '../assets/backgrounds/mcdonald_bg.png';
import bg8 from '../assets/backgrounds/rednuke_bg.png';
import bg9 from '../assets/backgrounds/thelocalbar_bg.png';
import bg10 from '../assets/backgrounds/thisisfine_bg.png';
import bg11 from '../assets/backgrounds/trenches_bg.png';
import bg12 from '../assets/backgrounds/windowsxp_bg.png';
import bg13 from '../assets/backgrounds/yacht_bg.png';

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
import eyes6 from '../assets/eyes/money_bag_eye.png';
import eyes7 from '../assets/eyes/ok_glass_eye.png';
import eyes8 from '../assets/eyes/pit_viper_eye.png';
import eyes9 from '../assets/eyes/sanpaku_eye.png';
import eyes10 from '../assets/eyes/sleeping_mask_eye.png';
import eyes11 from '../assets/eyes/stoner_eye.png';
import eyes12 from '../assets/eyes/thug_life.png';
import eyes13 from '../assets/eyes/vr_goggle_eye.png';

import head1 from '../assets/heads/blood_bandage_head.png';
import head2 from '../assets/heads/crown_head.png';
import head3 from '../assets/heads/fud_police_head.png';
import head4 from '../assets/heads/headset_head.png';
import head5 from '../assets/heads/mcdonald_head.png';
import head6 from '../assets/heads/propeller_head.png';
import head7 from '../assets/heads/christmas_head.png';
import head8 from '../assets/heads/foil_head.png';
import head9 from '../assets/heads/hat_head.png';
import head10 from '../assets/heads/traffic_cone_head.png';
import head11 from '../assets/heads/wif_hat_head.png';
import head12 from '../assets/heads/wizard_head.png';

import mouth1 from '../assets/mouths/blunt_mouth.png';
import mouth2 from '../assets/mouths/cigarette_mouth.png';
import mouth3 from '../assets/mouths/grillz_mouth.png';
import mouth4 from '../assets/mouths/rose_mouth.png';
import mouth5 from '../assets/mouths/toothpick_mouth.png';
import mouth6 from '../assets/mouths/pacifier_mouth.png';
import mouth7 from '../assets/mouths/vape_mouth.png';

import sticker1 from '../assets/stickers/band-aid-sticker.png';
import sticker2 from '../assets/stickers/dev_sticker.png';
import sticker3 from '../assets/stickers/gm_sticker.png';
import sticker4 from '../assets/stickers/jeet_sticker.png';
import sticker5 from '../assets/stickers/looks_rare_sticker.png';
import sticker6 from '../assets/stickers/ngmmi_sticker.png';
import sticker7 from '../assets/stickers/wagmi_sticker.png';
import sticker8 from '../assets/stickers/discount_sticker.png';
import sticker9 from '../assets/stickers/ok_sticker.png';
import sticker10 from '../assets/stickers/this-is-fine-sticker.png';
import sticker11 from '../assets/stickers/wagmi2_sticker.png';

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
    {
        id: 'bg6',
        name: 'basement',
        category: 'backgrounds',
        src: bg6,
        thumbnail: bg6,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg7',
        name: 'Mcdonald',
        category: 'backgrounds',
        src: bg7,
        thumbnail: bg7,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg8',
        name: 'Red Nuke',
        category: 'backgrounds',
        src: bg8,
        thumbnail: bg8,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg9',
        name: 'The Local Bar',
        category: 'backgrounds',
        src: bg9,
        thumbnail: bg9,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg10',
        name: 'This is Fine',
        category: 'backgrounds',
        src: bg10,
        thumbnail: bg10,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg11',
        name: 'Trenches',
        category: 'backgrounds',
        src: bg11,
        thumbnail: bg11,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg12',
        name: 'Windows XP',
        category: 'backgrounds',
        src: bg12,
        thumbnail: bg12,
        order: 0,
        bbox: FULL_BBOX
    },
    {
        id: 'bg13',
        name: 'Yacht',
        category: 'backgrounds',
        src: bg13,
        thumbnail: bg13,
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
    {
        id: 'head7',
        name: 'Christmas Head',
        category: 'heads',
        src: head7,
        thumbnail: head7,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head8',
        name: 'Foil Head',
        category: 'heads',
        src: head8,
        thumbnail: head8,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head9',
        name: 'Top Hat Head',
        category: 'heads',
        src: head9,
        thumbnail: head9,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head10',
        name: 'Traffic Cone Head',
        category: 'heads',
        src: head10,
        thumbnail: head10,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head11',
        name: 'Wif Hat Head',
        category: 'heads',
        src: head11,
        thumbnail: head11,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head12',
        name: 'Wizard Head',
        category: 'heads',
        src: head12,
        thumbnail: head12,
        order: 2,
        bbox: FULL_BBOX
    },
    {
        id: 'head13',
        name: 'None',
        category: 'heads',
        src: '',
        thumbnail: '',
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
    {
        id: 'eyes6',
        name: 'Money Bag Eyes',
        category: 'eyes',
        src: eyes6,
        thumbnail: eyes6,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes7',
        name: 'OK Glass Eyes',
        category: 'eyes',
        src: eyes7,
        thumbnail: eyes7,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes8',
        name: 'Pit Viper Eyes',
        category: 'eyes',
        src: eyes8,
        thumbnail: eyes8,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes9',
        name: 'Sanpaku Eyes',
        category: 'eyes',
        src: eyes9,
        thumbnail: eyes9,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes10',
        name: 'Sleeping Mask Eyes',
        category: 'eyes',
        src: eyes10,
        thumbnail: eyes10,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes11',
        name: 'Stoner Eyes',
        category: 'eyes',
        src: eyes11,
        thumbnail: eyes11,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes12',
        name: 'ThugLife Eyes',
        category: 'eyes',
        src: eyes12,
        thumbnail: eyes12,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes13',
        name: 'VR Google Eyes',
        category: 'eyes',
        src: eyes13,
        thumbnail: eyes13,
        order: 3,
        bbox: FULL_BBOX
    },
    {
        id: 'eyes14',
        name: 'None',
        category: 'eyes',
        src: eyes12,
        thumbnail: '',
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
    {
        id: 'mouth7',
        name: 'Vape',
        category: 'mouths',
        src: mouth7,
        thumbnail: mouth7,
        order: 4,
        bbox: FULL_BBOX
    },
    {
        id: 'mouth8',
        name: 'None',
        category: 'mouths',
        src: '',
        thumbnail: '',
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
        name: 'wagmi VIP Sticker',
        category: 'stickers',
        src: sticker7,
        thumbnail: sticker7,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker8',
        name: 'discount Sticker',
        category: 'stickers',
        src: sticker8,
        thumbnail: sticker8,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker9',
        name: 'OK Sticker',
        category: 'stickers',
        src: sticker9,
        thumbnail: sticker9,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker10',
        name: 'This is Fine Sticker',
        category: 'stickers',
        src: sticker10,
        thumbnail: sticker10,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker11',
        name: 'wagmi Sticker',
        category: 'stickers',
        src: sticker11,
        thumbnail: sticker11,
        order: 5,
        bbox: FULL_BBOX
    },
    {
        id: 'sticker12',
        name: 'None',
        category: 'stickers',
        src: '',
        thumbnail: '',
        order: 5,
        bbox: FULL_BBOX
    },
];

export const CATEGORIES = ['backgrounds', 'bodies', 'heads', 'eyes', 'mouths', 'stickers'] as const;
export type Category = typeof CATEGORIES[number];

// Optional: Export the bboxes if you need them elsewhere
export { FULL_BBOX };