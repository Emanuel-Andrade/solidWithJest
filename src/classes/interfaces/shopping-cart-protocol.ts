import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem([...itens]: CartItem[]): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDicount(): number;
  isEmpty(): boolean;
  clear(): void;
}
