import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';
describe('Describe', () => {
  const createSUT = (className: new () => Discount): Discount => {
    return new className();
  };

  it('should have no discount', () => {
    const sut = createSUT(NoDiscount);
    expect(sut.calculate(100)).toEqual(100);
  });
  it('should have 15% discount', () => {
    const sut = createSUT(FiftyPercentDiscount);
    expect(sut.calculate(100)).toEqual(85);
  });
  it('should have 10% discount', () => {
    const sut = createSUT(TenPercentDiscount);
    expect(sut.calculate(100)).toEqual(90);
  });
});
