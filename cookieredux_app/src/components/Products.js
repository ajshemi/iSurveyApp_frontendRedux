import React from 'react';
import Product from './Product'


const Products = (props) => {
  console.log("products" + props)
        
  let arrayOfComponents=props.products.map(product => <Product key={product.id} product={product}/>)
  return(
    <div>
      <ul>
         { arrayOfComponents}
      </ul>
    </div>
  )
}


export default Products;