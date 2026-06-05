import ruyLopez from "./ruy-lopez";
import italian from "./italian";
import queensGambit from "./queens-gambit";
import londonSystem from "./london-system";
import ponziani from "./ponziani";
import sicilianDefense from "./sicilian-defense";
import caroKann from "./caro-kann";
import frenchDefense from "./french-defense";
import kingsIndian from "./kings-indian";
import qgdDeclined from "./qgd-declined";
import type { Opening } from "@/types";

export const REPERTOIRE: Opening[] = [
  ruyLopez,
  italian,
  queensGambit,
  londonSystem,
  ponziani,
  sicilianDefense,
  caroKann,
  frenchDefense,
  kingsIndian,
  qgdDeclined,
];

export function findOpening(id: string): Opening | undefined {
  return REPERTOIRE.find((o) => o.id === id);
}

export function findLine(openingId: string, lineId: string) {
  const opening = findOpening(openingId);
  if (!opening) return { opening: undefined, line: undefined };
  const line = opening.lines.find((l) => l.id === lineId);
  return { opening, line };
}

export {
  ruyLopez,
  italian,
  queensGambit,
  londonSystem,
  ponziani,
  sicilianDefense,
  caroKann,
  frenchDefense,
  kingsIndian,
  qgdDeclined,
};
