import { checkItemsQuantity } from './Product';

describe('Product', () => {
  describe('checkItemsQuantity', () => {
    it('Returns amount of items in cart', () => {
      const cart = [
        {
          id: 3,
          name: 'Dress',
          unitPrice: 80.75,
          quantity: 1,
        },
        {
          id: 2,
          name: 'Jeans',
          unitPrice: 65.5,
          quantity: 2,
        },
      ];

      const result = checkItemsQuantity(cart);

      expect(result).toBe(3);
    });
  });
});
