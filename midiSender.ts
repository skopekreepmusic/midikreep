import midi from "midi";
import { MidiNote, Scale, ScaleInterval } from './types';
const NoteOn = 144;
const NoteOff = 128;
const NoteDuration = 500;

export const output = new midi.Output();

// Declare function listMidiPorts
export function listMidiPorts(output: any) {
  // List available MIDI output ports.
  const portCount = output.getPortCount();
  console.log("Available MIDI Ports:");
  for (let i = 0; i < portCount; i++) {
    console.log(`${i}: ${output.getPortName(i)}`);
  }
}

export function sendMidiNote(output: any, note: MidiNote) {
    // Open the Ableton MIDI input port (replace `0` with the correct port index for Ableton).
    // output.openPort(0);

    // Send a MIDI Note On message (144 = Note On, 60 = Middle C, 127 = Max Velocity).
    output.sendMessage([NoteOn, note.note, 127]);
    console.log("Note On sent");

    // Wait and send a MIDI Note Off message (128 = Note Off).
    setTimeout(() => {
        output.sendMessage([NoteOff, note.note, 127]);
        console.log("Note Off sent");
    }, NoteDuration);
}

export function playScale(output: any, scale: Scale) {
    // Open the Ableton MIDI input port (replace `0` with the correct port index for Ableton).
    output.openPort(0);
    
    // Send the notes of the scale in order.
    const notes = Object.values(scale);
    notes.forEach((note, index) => {
        setTimeout(() => {
            sendMidiNote(output, { note, duration: NoteDuration, velocity: 127 });
        }, NoteDuration * index);
    });
    
    // Close the port after sending all the messages.
    setTimeout(() => {
        output.closePort();
    }, NoteDuration * notes.length + NoteDuration);
}