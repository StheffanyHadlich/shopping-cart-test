import './App.css';
import { PriceSummary } from './Cart/presentation/components/PriceSummary';
import { useCart } from './Cart/presentation/hooks/useCart';
import { Catalog } from './Product/presentation/components/Catalog';

function App() {
  const { addToCart, removeFromCart, cart, total, quantity } = useCart();

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <Catalog addToCart={addToCart} removeFromCart={removeFromCart} />
      <PriceSummary cart={cart} totalPrice={total} quantity={quantity} />
    </div>
  );
}

export default App;
