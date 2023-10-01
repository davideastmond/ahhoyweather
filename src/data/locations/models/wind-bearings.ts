type CardinalDirection =
  | "n"
  | "nne"
  | "ne"
  | "ene"
  | "e"
  | "ese"
  | "se"
  | "sse"
  | "s"
  | "ssw"
  | "sw"
  | "wsw"
  | "w"
  | "wnw"
  | "nw"
  | "nnw";

export type WindBearing = {
  [keyof in CardinalDirection]: { min: number; max: number };
};
