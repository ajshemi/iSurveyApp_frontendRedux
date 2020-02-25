import React, {Component} from 'react';
import { Rating, Card,Icon,Image } from 'semantic-ui-react'

class UserRatingInput extends  Component {
  state = {
     rating: 0 
    }
  handleChange = (e) => {
    this.setState({ rating: e.target.value }
      ,() => {this.props.handleRating(this.state.rating,this.props.product.review_id,this.props.product.id,this.props.user_id)}
    )
  }

  render (){
  console.log(this.props.product.id)
  console.log(this.props.product.review_id)
  console.log(this.props.product.rating)
  console.log(this.state.rating)
  const { rating } = this.state
  return(
    <div className='card'>
      <div>
        <div>Rating: {rating}</div>
        <input
          type='range'
          min={0}
          max={5}
          value={rating}
          onChange={this.handleChange}
        />
        <br />
        <Rating rating={this.state.rating} maxRating={5} />
      </div>
    </div>
  )
  }
};

export default UserRatingInput;