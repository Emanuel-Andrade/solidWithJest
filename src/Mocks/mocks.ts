import { Discount } from '../classes/discount';
import { ShoppingCart } from '../classes/shopping-cart';
import { OrderStatus } from '../classes/interfaces/order-status';
import { ShoppingCartProtocol } from '../classes/interfaces/shopping-cart-protocol';
import {
  IndividualCustomerProtocol,
  CustomerOrder,
} from '../classes/interfaces/customer-protocol';

class DiscountMockClass extends Discount {
  protected readonly discount = 0.15;
}

class OrderMockClass {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.cart.clear();

    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}

class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export const DiscountMock = new DiscountMockClass();
export const IndividualCustomertMock = new IndividualCustomer(
  'Emanue',
  'Andrade',
  '123123',
);
export const ShoppingCartMock = new ShoppingCart(DiscountMock);
export const OrderMock = new OrderMockClass(
  ShoppingCartMock,
  IndividualCustomertMock,
);
