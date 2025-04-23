import { checkItemsQuantity } from "../../Product/application/Product";

const calculateTotal = (cart) =>
  cart.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);

const sortLessExpensiveItem = (cart) => {
  const sortedItems = cart.sort((a, b) => a.unitPrice - b.unitPrice);

  return sortedItems[0];
};

const apply3for2Discount = (cart) => {
  const lessExpensiveItem = sortLessExpensiveItem(cart);

  const discountedCart = cart.map((item) => {
    if (item.id !== lessExpensiveItem.id) return item;

    return { ...item, quantity: item.quantity - 1 };
  });

  return calculateTotal(discountedCart);
};

export const getTotal = (cart) => {
  const quantity = checkItemsQuantity(cart);

  if (quantity < 3) return calculateTotal(cart);

  return apply3for2Discount(cart);
};
