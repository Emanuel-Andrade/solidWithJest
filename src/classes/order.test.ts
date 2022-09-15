import { OrderMock as sut, ShoppingCartMock } from '../Mocks/mocks';
describe('Order tester', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('shoul return open before the checkout is called', () => {
    const spyCheckout = jest.spyOn(sut, 'checkout');
    expect(spyCheckout).toHaveBeenCalledTimes(0);
    expect(sut.orderStatus).toEqual('open');
  });

  it('should not allow clse cart if its empty', () => {
    sut.checkout();
    expect(ShoppingCartMock.isEmpty()).toEqual(true);
    expect(sut.orderStatus).toEqual('open');
  });

  it('should close order after checkout is called', () => {
    ShoppingCartMock.addItem([{ name: 'bread', price: 7.9 }]);
    const spyCheckout = jest.spyOn(sut, 'checkout');
    sut.checkout();
    expect(spyCheckout).toHaveBeenCalled();
    expect(sut.orderStatus).toEqual('closed');
  });
});
