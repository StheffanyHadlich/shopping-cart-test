export const Product = ({ name, unitPrice, handleAdd, handleRemove }) => (
  <div className="product">
    <p>{name}</p>
    <p>{`R$ ${unitPrice}`}</p>

    <button type="button" onClick={handleRemove}>
      - Remove
    </button>
    <button type="button" onClick={handleAdd}>
      + Add
    </button>
  </div>
);
