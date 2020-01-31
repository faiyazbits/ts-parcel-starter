import { simpleFunction } from "../src";

describe("sample", () => {
  it("canary", () => {
    expect(true).toEqual(true);
  });

  it("simple", () => {
    expect(simpleFunction("sample")).toEqual("sample");
  });
});
