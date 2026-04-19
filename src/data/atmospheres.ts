export type Atmosphere = {
  index: string;
  name: string;
  era: string;
  region: string;
  reading: string;
  specimen: string;
  abstract: string;
  palette: string[];
};

export const atmospheres: Atmosphere[] = [
  {
    index: "Æ-001",
    name: "Umbral Monsoon",
    era: "Catalogued 14.03.2041",
    region: "Bathyal Reaches, Sector VII",
    reading: "−42.7 lum · pH 6.1 · tidelock",
    specimen: "Obsidian mist. Light-averse. Listens.",
    abstract:
      "A weather that arrives on the floor of abandoned cathedrals and drafts itself upward, pulling cold reverence through the nave. Smells of candle-wick and iron.",
    palette: ["#050507", "#1b3a6b", "#6b6f85"],
  },
  {
    index: "Æ-002",
    name: "Ember Stillwind",
    era: "Catalogued 07.11.2043",
    region: "Basalt Plateau, Sublevel II",
    reading: "+311 k · sodium plume · drift 0.02",
    specimen: "Warm ash with memory of cedar.",
    abstract:
      "A dry, unmoving heat that burns only things already spoken. Every Ember Stillwind leaves a precise arc of silence the shape of the last word uttered beneath it.",
    palette: ["#2a1608", "#e8a95c", "#ece6d6"],
  },
  {
    index: "Æ-003",
    name: "Velvet Inversion",
    era: "Catalogued 22.06.2045",
    region: "Upper Corona, Drift Lane 9",
    reading: "−8.2 °C · 98% rh · pressure ↓↓↓",
    specimen: "Low cloud with the density of moth-wing.",
    abstract:
      "Weather that runs backward through a day. Rainfall ascends. Thunder precedes its lightning by precisely eleven seconds and forgets to arrive at all.",
    palette: ["#120c1c", "#5b3e7c", "#c7b8d8"],
  },
  {
    index: "Æ-004",
    name: "Glass Monsoon",
    era: "Catalogued 19.02.2047",
    region: "Equatorial Shelf, Trench 14",
    reading: "322 mm · crystalline · 1.4 kHz tone",
    specimen: "Rainfall of silicate. Sings on impact.",
    abstract:
      "A precipitation of fine glass droplets tuned to E-flat. Forms cathedrals upon the ground that collapse at dawn and are re-built by the next afternoon.",
    palette: ["#0a1018", "#7fb3c7", "#ece6d6"],
  },
  {
    index: "Æ-005",
    name: "Salt Aurora",
    era: "Catalogued 03.09.2048",
    region: "Polar Dunes, Archive B",
    reading: "+02 °C · magnetic pull · lumen 0.4",
    specimen: "Crystalline curtain, electric saline.",
    abstract:
      "A storm of dry salt that levitates and ignites, visible only to navigators with an unfinished letter in their coat pocket. Lasts as long as the letter is unread.",
    palette: ["#06111a", "#9ecbd1", "#ece6d6"],
  },
  {
    index: "Æ-006",
    name: "Mercury Calm",
    era: "Catalogued 28.12.2050",
    region: "Archive — Eventide Corridor",
    reading: "00.0 wind · 00.0 rain · 00.0 sound",
    specimen: "Absolute stillness. Reflective.",
    abstract:
      "A weather defined by its refusal to weather. Instruments placed inside a Mercury Calm photograph the observer instead of the sky for a duration of precisely one breath.",
    palette: ["#0e0e11", "#a9b7c6", "#e8e3d6"],
  },
];
