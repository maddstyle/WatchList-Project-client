import React from "react";
import { Container, ProductList } from "./styles";
/**
 *
//  * @param {inventory} destructuring from App.js
 */
export default function Dashboard({ inventory }) {
 
  return (
    <Container>
      <ProductList>
        {inventory.map(item => (
          <li key={item._id}>
            <img
              src="https://www.diamondsourcenyc.com/wp-content/uploads/2016/06/116508gri.jpg"
              alt="Dayona Watch"
            />
            <strong>{`${item.brand}`}</strong>
            <strong>{`${item.model}`}</strong>
            <span>{item.price ? item.price : "$25,000"}</span>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}
