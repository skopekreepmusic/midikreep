// import { MidiNote, Scale, ScaleInterval } from './types';
import { output, listMidiPorts, sendMidiNote, playScale } from './midiSender';
import { CMajorScale, DbMajorScale, DMajorScale } from './constants/scales';

// Call the function listMidiPorts
// listMidiPorts(output);

// Play a C Major scale
// playScale(output, CMajorScale);
// Play a Db Major scale
// playScale(output, DbMajorScale);
// Play a D Major scale
playScale(output, DMajorScale);