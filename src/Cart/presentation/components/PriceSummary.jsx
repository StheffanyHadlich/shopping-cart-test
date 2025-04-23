export const PriceSummary = ({ totalPrice, quantity, cart }) => {
  return <div>
    <p>{`Total: R$ ${totalPrice}`}</p>
    <p>{`Quantity of items: ${quantity}`}</p>
    <ul>
      {cart.map(item => (
        <li>{`(${item.quantity}) ${item.name}`}</li>
      ))}
    </ul>
  </div>
}