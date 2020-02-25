import React from 'react';
import Products from './Products'
import {connect} from 'react-redux'
import CommentInput from './CommentInput'
import Comment from './Comment'
import UserProducts from './UserProducts'
import {updateRatingToState} from '../Redux/actions'


const UserRatingContainer = (props) => {
    const handleRating=(rating,review_id,product_id,user_id) => {
        console.log(rating)
        console.log(review_id)
        if (localStorage.getItem("token")) {
          let token = localStorage.getItem('token')
          fetch(`http://localhost:3000/reviews/${review_id}`,{
            method:"PATCH",
            headers:{
              'Content-Type' :'application/json',
               "Authorization": `bearer ${token}`},
            body:JSON.stringify({
              rating: rating,
              user_id: user_id,
              product_id:product_id
            })
          })
          .then(resp=>resp.json())
          .then(review=>
            
            // console.log(review)
            props.updateRatingToState(review)
            
            )
        }
      }
  console.log("hello from product container",props)
  return(
    <div>
      <h1>All the Products!</h1>
      <ul>
        <UserProducts handleRating={handleRating} user={props.user}/>
        <CommentInput user={props.user}/>
        <Comment user={props.user}/>
      </ul>
    </div>
  )
}





const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    user: state.user.user
  }
}

export default connect(mapStateToProps,{updateRatingToState})(UserRatingContainer);