import { Product } from './Product';
import { PRODUCTS } from '../../constants';
import '../../../App.css';

export const Catalog = ({ addToCart, removeFromCart }) => (
  <div className="catalog">
    <Product
      name={PRODUCTS.tshirt.name}
      unitPrice={PRODUCTS.tshirt.unitPrice}
      handleAdd={() => addToCart(PRODUCTS.tshirt)}
      handleRemove={() => removeFromCart(PRODUCTS.tshirt)}
    />
    <Product
      name={PRODUCTS.jeans.name}
      unitPrice={PRODUCTS.jeans.unitPrice}
      handleAdd={() => addToCart(PRODUCTS.jeans)}
      handleRemove={() => removeFromCart(PRODUCTS.jeans)}
    />
    <Product
      name={PRODUCTS.dress.name}
      unitPrice={PRODUCTS.dress.unitPrice}
      handleAdd={() => addToCart(PRODUCTS.dress)}
      handleRemove={() => removeFromCart(PRODUCTS.dress)}
    />
  </div>
);
