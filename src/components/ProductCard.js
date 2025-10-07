import React, { memo } from "react";

const ProductCard = memo(({ product, onRemove }) => (
  <div style={{border: "1px solid #ccc", padding: "10px", margin: "5px"}}>
    <h3>{product.name}</h3>
    <p>Количество: {product.qty}</p>
    <p>{product.meta}</p>
    {onRemove && <button onClick={onRemove}>Удалить</button>}
  </div>
));

export default ProductCard;
