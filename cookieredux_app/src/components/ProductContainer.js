import React from 'react';
import Product from './Product';
import ReviewForm from './ReviewForm'
import {connect} from 'react-redux'


const ProductContainer = (props) => {
  console.log(props)
  return(
    <div >
      {props.products.map(product =>  <Product key={product.product_id} product={product}/>)}
    </div>
  )
}



const mapStateToProps = (state) => {
  console.log(state)
  return {
    products: state.products.products,
    user: state.user.user
  }
}

export default connect(mapStateToProps)(ProductContainer);