import Math from "../src/math";

describe("Comparator", () => {
  it("should apply comparator to all the previous and current values", () => {
    const math = new Math(1);

    const comparator = (value) => value >= 0

    expect(math.applyComparator(comparator)).toEqual(true);
  });

  it('should return true when all values satisfies the comparator', async () => {
    const math = new Math(10);

    const comparator = (value) => value % 10 === 0

    math.calc('sum', 90)
    math.calc('divide', 2)
    math.calc('multiply', 4)
    math.calc('function', (value) => value / 20)

    expect(math.applyComparator(comparator)).toEqual(true);
  })

  it('should return false when any of the values does NOT satisfies the comparator', () => {
    const math = new Math(0);

    const comparator = (value) => value === 0

    math.calc('sum', 0)
    math.calc('divide', 2)
    math.calc('sum', 1)
    math.calc('multiply', 0)

    expect(math.applyComparator(comparator)).toEqual(false);
  })
});
