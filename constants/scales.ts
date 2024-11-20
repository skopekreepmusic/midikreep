// Import Scale and ScaleInterval from the directory .types/
import { Scale, ScaleInterval } from '../types';
import NOTES from './notes';

const generateMajorScale = (root: number): Scale => {
    return {
        [ScaleInterval.Root]: root,
        [ScaleInterval.Second]: root + 2,
        [ScaleInterval.Third]: root + 4,
        [ScaleInterval.Fourth]: root + 5,
        [ScaleInterval.Fifth]: root + 7,
        [ScaleInterval.Sixth]: root + 9,
        [ScaleInterval.Seventh]: root + 11,
        [ScaleInterval.Octave]: root + 12
    };
};

export const CMajorScale = generateMajorScale(NOTES.C4);
export const DbMajorScale = generateMajorScale(NOTES.Db4);
export const DMajorScale = generateMajorScale(NOTES.D4);


// export const cMajorScale: Scale = {
//     [ScaleInterval.Root]: 60,     // C4
//     [ScaleInterval.Second]: 62,   // D4
//     [ScaleInterval.Third]: 64,    // E4
//     [ScaleInterval.Fourth]: 65,   // F4
//     [ScaleInterval.Fifth]: 67,    // G4
//     [ScaleInterval.Sixth]: 69,    // A4
//     [ScaleInterval.Seventh]: 71,  // B4
//     [ScaleInterval.Octave]: 72    // C5
// };

// const cMajorPentatonicScale: Scale = {
//     [ScaleInterval.Root]: 60,     // C4
//     [ScaleInterval.Second]: 62,   // D4
//     [ScaleInterval.Third]: 64,    // E4
//     [ScaleInterval.Fifth]: 67,    // G4
//     [ScaleInterval.Sixth]: 69,    // A4
//     [ScaleInterval.Octave]: 72    // C5
// };