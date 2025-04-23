export const checkItemsQuantity = (cart) =>
  cart.reduce((acc, item) => acc + item.quantity, 0);