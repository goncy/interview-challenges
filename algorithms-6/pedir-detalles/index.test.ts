import type { Developer } from "./types";

import { expect, describe, it } from "vitest";

import pedirDetalles from ".";

describe("pedirDetalles", () => {
  it("debería devolver los desarrolladores correctamente - resultados", () => {
    const actual: Developer[] = [
      {
        firstName: null,
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: null,
      },
      {
        firstName: "Madison",
        lastName: "U.",
        country: "United States",
        continent: "Americas",
        age: 32,
        language: "Ruby",
      },
    ];
    const expected = [
      {
        firstName: null,
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
        question: "Hi, could you please provide your firstName.",
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: null,
        question: "Hi, could you please provide your language.",
      },
    ];

    expect(pedirDetalles(actual)).toMatchObject(expected);
  });

  it("debería devolver los desarrolladores correctamente - vacio", () => {
    const actual: Developer[] = [
      {
        firstName: "Sofia",
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: "Python",
      },
      {
        firstName: "Madison",
        lastName: "U.",
        country: "United States",
        continent: "Americas",
        age: 32,
        language: "Ruby",
      },
    ];
    const expected = [];

    expect(pedirDetalles(actual)).toMatchObject(expected);
  });
});
