import Math from "../src/math";

describe("Functions", () => {
  it('should apply function over the current value', async () => {
    const math = new Math(10)

    math.calc('function', (value) => value + value * value)
    expect(math.getCurrentValue()).toEqual(110);

    math.calc('function', (value) => value + 1.22 | 0)
    expect(math.getCurrentValue()).toEqual(111);
  })
});
