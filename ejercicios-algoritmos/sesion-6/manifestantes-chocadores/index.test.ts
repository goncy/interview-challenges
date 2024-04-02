import {expect, describe, it} from "vitest";

import manifestantesChocadores from ".";

describe("manifestantesChocadores", () => {
  it("ID", () => expect(manifestantesChocadores("ID")).toBe("0 0"));
  it("DDD", () => expect(manifestantesChocadores("DDD")).toBe("0 0 0"));
  it("DI", () => expect(manifestantesChocadores("DI")).toBe("1 1"));
  it("DDI", () => expect(manifestantesChocadores("DDI")).toBe("1 2 1"));
});
