import React from 'react';
import Products from './Products'
import {connect} from 'react-redux'
// import CommentInput from './CommentInput'
// import Comment from './Comment'


const ProductContainer = (props) => {
  console.log("hello from product container")
  console.log(props.products)
  return(
    <div>
      <h1>All the Products!</h1>
      <ul>
        <Products products={props.products}/>
        {/* <CommentInput user={props.user}/> */}
        {/* <Comment user={props.user}/> */}
      </ul>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    products: state.products.products
    // user: state.user
  }
}

export default connect(mapStateToProps)(ProductContainer);