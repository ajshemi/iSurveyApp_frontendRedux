import React from 'react';
import Product from './Product';
import UserRatingInput from './UserRatingInput'



const UserProducts = (props) => {
  console.log("products", props)
        
  let arrayOfComponents=props.user.user_ratings.map(product =>
    <li>
     <Product key={`${product.id}|${product.name}`} product={product}/>
     <UserRatingInput key={product.id} handleRating={props.handleRating} product={product} user_id={props.user.id}/>
     </li>
  )
  return(
    <div>
      <ul>
         { arrayOfComponents}
      </ul>
    </div>
  )
}





export default UserProducts;