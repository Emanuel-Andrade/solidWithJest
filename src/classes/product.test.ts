import { Product } from './product';

describe(' Product', () => {
  const createSUT = (name: string, price: number) => {
    return new Product(name, price);
  };
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSUT('Boné', 18.8);
    expect(sut.name).toEqual('Boné');
    expect(sut.price).toBeCloseTo(18.8);
  });
});
