import Math from "../src/math";

describe("Listeners", () => {
  it("should add listener", () => {
    const math = new Math(1);

    const listener1 = jest.fn()

    math.addListener(listener1);

    math.calc('sum', 1);
    expect(math.getCurrentValue()).toEqual(2);
  });

  it('should remove listener', async () => {
    const math = new Math(1);

    const listener1 = jest.fn()

    math.addListener(listener1);
    math.removeListener(listener1);

    math.calc('sum', 1);

    expect(math.getCurrentValue()).toEqual(2);
    expect(listener1).not.toHaveBeenCalled()
  })

  it('should call the listeners when value is changed', async () => {
    const math = new Math(1);

    const listener1 = jest.fn()
    const listener2 = jest.fn()

    math.addListener(listener1);
    math.addListener(listener2);

    math.calc('sum', 1);

    expect(listener1).toBeCalledTimes(1)
    expect(listener2).toBeCalledTimes(1)
    expect(listener1).toHaveBeenCalledWith(2)
    expect(listener2).toHaveBeenCalledWith(2)
  })

  it('should NOT call the listeners when the value is NOT changed', async () => {
    const math = new Math(1);

    const listener1 = jest.fn()
    const listener2 = jest.fn()

    math.addListener(listener1);
    math.addListener(listener2);

    math.calc('sum', 0);

    expect(listener1).not.toHaveBeenCalled()
    expect(listener2).not.toHaveBeenCalled()
  })
});
