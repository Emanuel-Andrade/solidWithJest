import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';

describe('ShoppingCart', () => {
  class DiscountMock extends Discount {
    protected readonly discount = 0.15;
  }
  const sut = new ShoppingCart(new DiscountMock());
  const bread = { name: 'Bread', price: 7.9 };
  const water = { name: 'Water', price: 2.75 };

  it('should return true if de cart is empty', () => {
    expect(sut.isEmpty()).toEqual(true);
  });

  it('should add an item to cart', () => {
    sut.addItem([bread, water]);
    expect([bread, water]).toEqual(sut.items);
  });

  it('should return total price without discount', () => {
    expect(sut.total()).toBeCloseTo(bread.price + water.price);
  });

  it('should return total price with discount', () => {
    expect(sut.totalWithDicount()).toBeCloseTo(
      sut.total() - sut.total() * 0.15,
    );
  });

  it('should remove an item from cart', () => {
    sut.removeItem(1);
    expect(sut.items).toEqual([bread]);
  });

  it('should clear de cart', () => {
    sut.clear();
    expect(sut.items).toEqual([]);
  });
});
