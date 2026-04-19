export type Instrument = {
  code: string;
  name: string;
  purpose: string;
  measure: string;
};

export const instruments: Instrument[] = [
  {
    code: "I-01",
    name: "Kelvin Spool",
    purpose: "Records the temperature of memory",
    measure: "degrees of recollection (°r)",
  },
  {
    code: "I-02",
    name: "Barograph of Silences",
    purpose: "Charts the pressure inside unsaid sentences",
    measure: "pascals of restraint (pR)",
  },
  {
    code: "I-03",
    name: "Glass Anemometer",
    purpose: "Reads the direction of turning hesitations",
    measure: "degrees from north of the listener (°L)",
  },
  {
    code: "I-04",
    name: "Hygrometer VII",
    purpose: "Measures humidity in a half-finished gesture",
    measure: "% saturation (μ)",
  },
  {
    code: "I-05",
    name: "Salt Clock",
    purpose: "Counts the time it takes light to forget a room",
    measure: "moments (∎)",
  },
  {
    code: "I-06",
    name: "Ember Theodolite",
    purpose: "Triangulates the position of absent warmth",
    measure: "arcminutes of longing (′∫)",
  },
];
