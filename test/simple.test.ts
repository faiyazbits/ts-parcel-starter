import { simpleFunction } from "../src";

test("canary", () => {
  expect(true).toEqual(true);
});

test("simple", () => {
  expect(simpleFunction("sample")).toEqual("sample");
});
