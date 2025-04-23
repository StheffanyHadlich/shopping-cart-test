import { getTotal } from './Price';

describe('Price', () => {
  describe('Get total', () => {
    describe('When there are less than 3 products in cart', () => {
      it('Returns full price', () => {
        const cart = [
          {
            id: 3,
            name: 'Dress',
            unitPrice: 80.75,
            quantity: 1,
          },
        ];

        const result = getTotal(cart);

        expect(result).toBe(80.75);
      });
    });

    describe('3 for 2 Discount', () => {
      it('Returns price price of 2 products when cart has 3', () => {
        const cart = [
          {
            id: 3,
            name: 'Dress',
            unitPrice: 80.75,
            quantity: 3,
          },
        ];

        const result = getTotal(cart);
        const priceFor2Items = 161.5;

        expect(result).toBe(priceFor2Items);
      });
    });

    describe('Returns price price of 3 products when cart has 4', () => {
      it('Returns price with applied discount', () => {
        const cart = [
          {
            id: 3,
            name: 'Dress',
            unitPrice: 80.75,
            quantity: 4,
          },
        ];

        const result = getTotal(cart);
        const priceFor3Items = 242.25;

        expect(result).toBe(priceFor3Items);
      });
    });
  });
});
