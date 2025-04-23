import { useEffect, useState } from 'react';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../application/Cart';
import { getTotal } from '../../application/Price';
import { checkItemsQuantity } from '../../../Product/application/Product';

export const useCart = () => {
  const [cart, updateCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (product) => {
    const updatedCart = addProductToCart(product, cart);

    updateCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = removeProductFromCart(product, cart);

    updateCart(updatedCart);
  };

  useEffect(() => {
    setQuantity(checkItemsQuantity(cart));
    setTotal(getTotal(cart));
  }, [cart]);

  return {
    cart,
    total,
    quantity,
    addToCart,
    removeFromCart,
  };
};
