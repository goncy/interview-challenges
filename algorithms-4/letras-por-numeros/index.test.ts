import { expect, describe, it } from "vitest";

import letrasPorNumeros from ".";

describe("letrasPorNumeros", () => {
  it("debería devolver la representanción en números", () => {
    expect(letrasPorNumeros("abc")).toBe("1 2 3");
  });

  it("debería omitir espacios", () => {
    expect(letrasPorNumeros("abc def")).toBe("1 2 3 4 5 6");
  });

  it("debería omitir mayúsculas", () => {
    expect(letrasPorNumeros("aBc def")).toBe("1 2 3 4 5 6");
  });
});
