import { expect, describe, it } from "vitest";

import validarParentesis from ".";

describe("validarParentesis", () => {
  it("debería devolver true para casos validos", () => {
    expect(validarParentesis("()")).toBe(true);
    expect(validarParentesis("(())((()())())")).toBe(true);
  });

  it("debería devolver false para casos invalidos", () => {
    expect(validarParentesis(")(()))")).toBe(false);
    expect(validarParentesis("(")).toBe(false);
  });
});
