import { Example } from "../example";

describe("example test", () => {
  it("when valid, return sum", () => {
    expect(Example.sum(1, 2)).toBe(3);
  });
});
