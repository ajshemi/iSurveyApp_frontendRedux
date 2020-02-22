
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export const Product = (props) => {
  let arrayOfComponent=props.product.ingredients.map((ingredient,i)=> <li key={`${i}|${ingredient}`}>{ingredient}</li> )

  return (
    // <div>
      <Card>
    <Image src='/cookie-imgs/banana-oatmeal-raisin-cookies-9996 copy 2.jpg' wrapped ui={true} />
    <Card.Content>
    <Card.Header>{props.product.name}</Card.Header>
      {/* <Card.Meta>Joined in 2016</Card.Meta> */}
      <Card.Description>
        {arrayOfComponent}
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra> */}
      {/* <a>
        <Icon name='user' />
        10 Friends
      </a> */}
    {/* </Card.Content> */}
  </Card>
      
    // </div>
  );
};

export default Product

// class Product extends Component {

//   render ()
//   {
//   // console.log(this.props)
//   // let arrayOfComponent=this.props.product.ingredients.map((ingredient,i)=> <li key={`${i}|${ingredient}`}>{ingredient}</li> )
//   return
//   (
//   <div>
//   <Card>
//     <Image src='/cookie-imgs/pexels-photo-2074122 copy.jpeg' wrapped ui={false} />
//     <Card.Content>
//     <Card.Header>{/*this.props.product.name*/}</Card.Header>
//       {/* <Card.Meta>Joined in 2016</Card.Meta> */}
//       <Card.Description>
//         {/* Daniel is a comedian living in Nashville. */}
//         {/* <ul>{arrayOfComponent}</ul> */}
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       {/* <a>
//         <Icon name='user' />
//         10 Friends
//       </a> */}
//     </Card.Content>
//       </Card>
//      </div>)
//   }
// };

// export default Product;