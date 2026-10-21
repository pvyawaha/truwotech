// Line icons on a 24 x 24 grid, drawn by TechIconCycle.
// Each entry in `paths` must be a single subpath (one "M" command) so the
// stroke "draw-in" animation reveals every line evenly.

export type TechIcon = {
  name: string;
  paths: string[];
  /** Optional SVG transform applied to the whole icon. */
  transform?: string;
};

const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

export const TECH_ICONS: TechIcon[] = [
  {
    name: "Microchip",
    paths: [
      "M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z",
      "M10 9h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
      "M9 2v3",
      "M15 2v3",
      "M9 19v3",
      "M15 19v3",
      "M2 9h3",
      "M2 15h3",
      "M19 9h3",
      "M19 15h3",
    ],
  },
  {
    name: "Drone",
    paths: [
      "M10.5 9.5h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z",
      "M9.5 9.5L7.1 7.1",
      "M14.5 9.5L16.9 7.1",
      "M9.5 14.5L7.1 16.9",
      "M14.5 14.5L16.9 16.9",
      circle(5, 5, 3),
      circle(19, 5, 3),
      circle(5, 19, 3),
      circle(19, 19, 3),
    ],
  },
  {
    name: "Artificial intelligence",
    paths: [
      "M10 5Q11 12 18 13Q11 14 10 21Q9 14 2 13Q9 12 10 5Z",
      "M18.5 2.5Q19 5 21.5 5.5Q19 6 18.5 8.5Q18 6 15.5 5.5Q18 5 18.5 2.5Z",
    ],
  },
  {
    name: "Cloud",
    paths: ["M6.5 18.5H17A4 4 0 0 0 17 10.5A5 5 0 1 0 7 10.53A4 4 0 1 0 6.5 18.5Z"],
  },
  {
    name: "Code",
    paths: ["M8 7l-5 5 5 5", "M16 7l5 5-5 5", "M14 4.5l-4 15"],
  },
  {
    name: "Robot",
    paths: [
      "M7 8h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z",
      "M12 8V4.5",
      circle(12, 3.5, 1),
      "M9 12.5v2",
      "M15 12.5v2",
      "M10 17.5h4",
      "M2 13v3",
      "M22 13v3",
    ],
  },
  {
    name: "Electric power",
    paths: [
      "M4 7h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z",
      "M22 10.5v3",
      "M11.5 9l-2.5 3.5h3l-2.5 3.5",
    ],
  },
  {
    name: "Wireless IoT",
    paths: [
      circle(12, 17.5, 1),
      "M9.17 14.67a4 4 0 0 1 5.66 0",
      "M6.34 11.84a8 8 0 0 1 11.32 0",
      "M3.51 9.01a12 12 0 0 1 16.98 0",
    ],
  },
  {
    name: "Satellite",
    transform: "rotate(-30 12 12)",
    paths: [
      "M12 8.5l3.5 3.5-3.5 3.5-3.5-3.5z",
      "M8.5 12H7",
      "M15.5 12H17",
      "M2 9h5v6H2z",
      "M17 9h5v6h-5z",
      "M4.5 9v6",
      "M19.5 9v6",
      "M12 8.5V6.5",
      "M10 4.5a2 2 0 0 0 4 0",
    ],
  },
  {
    name: "Global network",
    paths: [
      circle(12, 12, 9),
      "M3 12h18",
      "M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9",
      "M12 3c-2.5 2.5-3.8 5.6-3.8 9s1.3 6.5 3.8 9",
    ],
  },
  {
    name: "Data",
    paths: [
      "M4 6a8 3 0 1 0 16 0a8 3 0 1 0-16 0",
      "M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6",
      "M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3",
    ],
  },
  {
    name: "Rocket",
    paths: [
      "M12 2.5c3 2.2 4.5 5.6 4.5 9.5v4.5h-9V12c0-3.9 1.5-7.3 4.5-9.5z",
      circle(12, 9.5, 1.6),
      "M7.5 12.5L4.5 15.5v3l3-2",
      "M16.5 12.5l3 3v3l-3-2",
      "M12 19v2.5",
      "M10 19v1.5",
      "M14 19v1.5",
    ],
  },
];
