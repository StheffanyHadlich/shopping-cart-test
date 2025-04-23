import { PRODUCTS } from '../../Product/constants';
import { addProductToCart, removeProductFromCart } from './Cart';

describe('Cart', () => {
  describe('Add product to cart', () => {
    describe('When adding a new product', () => {
      it('Adds it to cart', () => {
        const currentCart = [];
        const newProduct = PRODUCTS.dress;

        const result = addProductToCart(newProduct, currentCart);

        expect(result).toEqual([
          {
            id: 3,
            name: 'Dress',
            unitPrice: 80.75,
            quantity: 1,
          },
        ]);
      });
    });
  });

  describe('Remove Product From Cart', () => {
    describe('When removing a product with quantity 1', () => {
      it('remove it entirely from cart', () => {
        const cart = [
          {
            id: 3,
            name: 'Dress',
            unitPrice: 80.75,
            quantity: 1,
          },
        ];

        const product = PRODUCTS.dress;

        const result = removeProductFromCart(product, cart);

        expect(result).toEqual([]);
      });
    });

    describe('When removing a product with quantity > 1', () => {
      it('decreases quantity while keeping product in cart', () => {
        const cart = [
          {
            id: 3,
            name: 'Dress',
            unitPrice: 80.75,
            quantity: 2,
          },
        ];

        const product = PRODUCTS.dress;

        const result = removeProductFromCart(product, cart);

        expect(result).toEqual([
          {
            id: 3,
            name: 'Dress',
            unitPrice: 80.75,
            quantity: 1,
          },
        ]);
      });
    });
  });
});
