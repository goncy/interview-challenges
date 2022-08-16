import { expect, describe, it } from "vitest";

import continentesRepresentados from ".";

describe("continentesRepresentados", () => {
  it("debería devolver true si todos los continentes están representados", () => {
    expect(
      continentesRepresentados([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Agustín",
          lastName: "M.",
          country: "Chile",
          continent: "Americas",
          age: 37,
          language: "C",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "Ruby",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    ).toBe(true);
  });

  it("debería devolver false si todos los continentes no están representados", () => {
    expect(
      continentesRepresentados([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
      ])
    ).toBe(false);
  });
});
