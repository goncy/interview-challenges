import type { Developer } from "./types";

import { expect, describe, it } from "vitest";

import encontrarLaMedia from ".";

describe("encontrarLaMedia", () => {
  it("debería encontrar la media correctamente - 50", () => {
    const actual: Developer[] = [
      {
        firstName: "Maria",
        lastName: "Y.",
        country: "Cyprus",
        continent: "Europe",
        age: 30,
        language: "Java",
      },
      {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 70,
        language: "Python",
      },
    ];
    const expected = 50;

    expect(encontrarLaMedia(actual)).toBe(expected);
  });
});
