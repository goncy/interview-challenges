import { describe, it, assert } from "vitest";

import girar from ".";

describe("girar", () => {
  it("deberia girar las palabras correctamente", () => {
    assert.strictEqual(girar("Welcome"), "emocleW");
    assert.strictEqual(girar("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(girar("This is a test"), "This is a test");
    assert.strictEqual(girar("This is another test"), "This is rehtona test");
    assert.strictEqual(girar("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(
      girar("Just kidding there is still one more"),
      "Just gniddik ereht is llits one more"
    );
    assert.strictEqual(girar("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
});
