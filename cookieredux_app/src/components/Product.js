import React from 'react';
import { Rating, Card,Icon,Image } from 'semantic-ui-react'
// import ReviewContainer from './ReviewContainer'
// import ReviewInput from './ReviewInput'

const Product = (props) => {
    console.log(props)
    let arrayOfComponents=props.product.ingredients.map((ingredient,i)=> <li key={`${i}|${ingredient}`}>{ingredient}</li> )

  return(
    <div>
    <Card>
        <Image src='/cookie-imgs/banana-oatmeal-raisin-cookies-9996 copy 2.jpg'  wrapped ui={false} />
        <Card.Content>
        <Card.Header>{`${props.product.name} |${props.product.id}`}</Card.Header>
        {/* <Card.Meta>Joined in 2016</Card.Meta> */}
            <Card.Description>
        {/* Daniel is a comedian living in Nashville. */}
            <ul>{arrayOfComponents}</ul>
            </Card.Description>
        </Card.Content>

    </Card>   
    {/* <ReviewContainer/> */}
    {/* <ReviewInput/> */}
    </div>
  )
};

export default Product;