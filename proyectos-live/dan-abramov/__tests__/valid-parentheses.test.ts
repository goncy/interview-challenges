/*
## Valid Parentheses

Write a function that takes a string of parentheses,
and determines if the order of the parentheses is valid.
The function should return true if the string is valid,
and false if it's invalid.

### Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

### Constraints
0 <= input.length <= 100
*/

/*

- left paren in beginning is valid
- right paren in beginning is not valid

*/

function validParentheses(str: String) {}

describe("tests", () => {
  it(`values: "("`, () => expect(validParentheses("(")).toBe(false));
  it(`values: ")"`, () => expect(validParentheses(")")).toBe(false));
  it(`values: ""`, () => expect(validParentheses("")).toBe(true));
  it(`values: "()"`, () => expect(validParentheses("()")).toBe(true));
  it(`values: "())"`, () => expect(validParentheses("())")).toBe(false));
});
