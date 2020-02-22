

import React, {Component} from 'react';
import { Rating, Card,Icon,Image } from 'semantic-ui-react'


class Review extends  Component {
  state = {
     rating: 0 
    }

  handleChange = (e) => {
    this.setState({ rating: e.target.value })
  }
  
  render (){
  console.log(this.props)
  let arrayOfComponent=this.props.product.ingredients.map((ingredient,i)=> <li key={`${i}|${ingredient}`}>{ingredient}</li> )
 
  const { rating } = this.state
//   console.log(rating)
console.log(this.props.product.review_id)
  this.props.handleRating(rating,this.props.product.review_id)
  return(
    <div className='card'>
        <Card>
    <Image src='/cookie-imgs/banana-oatmeal-raisin-cookies-9996 copy 2.jpg'  wrapped ui={false} />
    <Card.Content>
    <Card.Header>{this.props.product.name}</Card.Header>
      {/* <Card.Meta>Joined in 2016</Card.Meta> */}
      <Card.Description>
        {/* Daniel is a comedian living in Nashville. */}
        <ul>{arrayOfComponent}</ul>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {/* <a>
        <Icon name='user' />
        10 Friends
      </a> */}
    </Card.Content>
      </Card>    
      
{/*       
      <li>{this.props.product.name}</li>
      <ul>{arrayOfComponent}</ul> */}
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

export default Review;