import React from 'react'
import { Container, ProductList } from './styles'
import { FiShoppingCart, FiChevronsUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'
/**
 *
//  * @param {inventory} destructuring from App.js
 */
export default function Dashboard({ inventory }) {
  return (
    <Container>
      <ProductList>
        {inventory.map((item) => (
          <li key={item._id}>
            <img
              src={
                item.image
                  ? item.image
                  : 'https://www.diamondsourcenyc.com/wp-content/uploads/2016/06/116508gri.jpg'
              }
              alt="Dayona Watch"
            />
            <strong>{`${item.brand}`}</strong>
            <strong>{`${item.model}`}</strong>
            <span>{item.price ? item.price : '$25,000'}</span>
            <div>
              <Link to={{ pathname: `watch/${item._id}`, state: { item } }}>
                <button> Update </button>
                <FiChevronsUp size={20} />
              </Link>
              <Link to={{ pathname: `purchase/${item._id}`, state: { item } }}>
                <button>Buy Now</button>
                <FiShoppingCart size={20} />
              </Link>
            </div>
          </li>
        ))}
      </ProductList>
    </Container>
  )
}
