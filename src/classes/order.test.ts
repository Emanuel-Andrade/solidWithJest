import { OrderMock } from '../Mocks/mocks';
describe('Order tester', () => {
  it('shoul return open before the checkout is called', () => {
    const spyCheckout = jest.spyOn(OrderMock, 'checkout');
    expect(spyCheckout).toHaveBeenCalledTimes(0);
    expect(OrderMock.orderStatus).toEqual('open');
  });
});
