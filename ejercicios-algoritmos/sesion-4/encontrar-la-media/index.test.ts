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

    expect(encontrarLaMedia(actual)).toMatchObject(expected);
  });

  it("debería encontrar la media correctamente - 21", () => {
    const actual: Developer[] = [
      {
        firstName: "Noa",
        lastName: "A.",
        country: "Israel",
        continent: "Asia",
        age: 20,
        language: "Ruby",
      },
      {
        firstName: "Andrei",
        lastName: "E.",
        country: "Romania",
        continent: "Europe",
        age: 21,
        language: "C",
      },
    ];
    const expected = 21;

    expect(encontrarLaMedia(actual)).toMatchObject(expected);
  });
});
