import {expect, describe, it} from "vitest";

import lasMoscasComedoras from ".";

describe("lasMoscasComedoras", () => {
  it("5 moscas", () =>
    expect(lasMoscasComedoras(5)).toBe(
      `Santi se comió 15 moscas, Siri se comió 28 moscas y Ubi se comió 946 moscas`,
    ));

  it("8 moscas", () =>
    expect(lasMoscasComedoras(8)).toBe(
      `Santi se comió 36 moscas, Siri se comió 171 moscas y Ubi se comió 21528 moscas`,
    ));
});
