import F from "../../../utils/Functions";

it("F.capitalise", () => {
  expect(F.capitalise("word")).toBe("Word");
  expect(F.capitalise("wOrD")).toBe("Word");
  expect(F.capitalise("WORD")).toBe("Word");
});
