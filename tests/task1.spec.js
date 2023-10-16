import Math from "../src/math";

describe("Math", () => {
  it('should return the initial value when no action is applied', async () => {
    const math = new Math(12);
    expect(math.getCurrentValue()).toEqual(12);
  })

  it('should sum with the initial value', async () => {
    const math = new Math(28);

    math.calc('sum', 14);
    expect(math.getCurrentValue()).toEqual(42);
  })

  it('should multiply the initial value', async () => {
    const math = new Math(5);

    math.calc('multiply', -2);
    expect(math.getCurrentValue()).toEqual(-10);
  })

  it('should divide the initial value', async () => {
    const math = new Math(33);

    math.calc('divide', 3);
    expect(math.getCurrentValue()).toEqual(11);
  })

  it('should process multiple actions', async () => {
    const math = new Math(78);

    math.calc('sum', 22);
    math.calc('divide', 10);
    math.calc('multiply', 4.2);
    expect(math.getCurrentValue()).toEqual(42);
  })
});
