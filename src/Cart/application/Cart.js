const increaseProductQuantity = (id, cart) =>
  cart.map((item) => {
    if (item.id !== id) return item;

    return { ...item, quantity: item.quantity + 1 };
  });

const addNewProductToCart = (product, cart) => [
  ...cart,
  { ...product, quantity: 1 },
];

export const addProductToCart = (product, cart) => {
  const isProductAlreadyInCart = cart.find((item) => item.id === product.id);

  return isProductAlreadyInCart
    ? increaseProductQuantity(product.id, cart)
    : addNewProductToCart(product, cart);
};

export const removeProductFromCart = (productToRemove, cart) => {
  const product = cart.find((item) => item.id === productToRemove.id);

  if (!product) return cart;

  const newCart = cart.filter((item) => item.id !== productToRemove.id);

  return product.quantity === 1
    ? newCart
    : [...newCart, { ...product, quantity: product.quantity - 1 }];
};
