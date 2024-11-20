import ScaleInterval from './ScaleInterval';

interface Scale {
    [ScaleInterval.Root]: number;
    [ScaleInterval.Second]: number;
    [ScaleInterval.Third]: number;
    [ScaleInterval.Fourth]: number;
    [ScaleInterval.Fifth]: number;
    [ScaleInterval.Sixth]: number;
    [ScaleInterval.Seventh]: number;
    [ScaleInterval.Octave]: number;
}

export default Scale;