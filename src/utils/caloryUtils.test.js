import caloryUtils from "./caloryUtils";

describe("caloryUtils tests", () => {
  describe("caloryUtils - calculateCalories tests", () => {
    it("should return the calculated calory count when the recipe is passed", () => {
      expect(caloryUtils.calculateCalories({ instructions: "test" })).toEqual(10)
    })
  })
})
