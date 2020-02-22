import React, { Component } from 'react';
import {connect} from 'react-redux'
import Review from './Review'


class UserReview extends Component {
    render() { 
        console.log(this.props.user)
        return (   
          <div >
            {this.props.user.owned_reviews.map(product =>  <Review handleRating={this.props.handleRating} key={product.product_id} product={product}/>)}
          </div>
      );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
    //   products: state.products.products,
      user: state.user.user
    }
}
 
export default connect(mapStateToProps)(UserReview) ;