import React from 'react';
import {Switch, Route} from 'react-router'
import {withRouter} from 'react-router-dom'

import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProductContainer from './components/ProductContainer'
import UserReview from './components/UserReview'


import {connect} from 'react-redux'
import {initializeProducts, saveUserToState, updateRatingToState} from './Redux/actions'

// fetchAndInitializeProducts
class App extends React.Component {

  componentDidMount() {
    
    fetch("http://localhost:3000/products")
    .then(r => r.json())
    .then((products) => {
      this.props.initializeProducts(products);
    })

    if (localStorage.getItem("token")) {
      let token = localStorage.getItem('token')
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(resp => {
        // console.log(resp)
        if (resp.token) {
          this.props.saveUserToState(resp);
        }
      })
    }
    // this.props.fetchAndInitializeProducts()
  }

  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(r => r.json())
      .then((resp) => 
      {
        console.log(resp)
        if (resp.token) {
          this.props.saveUserToState(resp);
          localStorage.setItem("token", resp.token)
        }
      }
      )
  }

  // handleRegisterSubmit = (userInfo) => {
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(
  //       userInfo
  //     )
  //   })
  //   .then(r => r.json())
  //   .then(resp =>
  //     {
  //       // console.log(resp)
  //       if (!resp.error) {
  //         this.props.saveUserToState(resp);
  //         localStorage.setItem("token", resp.token)
  //       }
  //     }


      //  {
      // if (!data.error) {
      //   localStorage.setItem("token", data.token)
      //   this.setState({
      //     user: data.user,
      //     token: data.token
      //   }
        // () => {
        //   this.props.history.push("/profile")
        // }
        // )
      // }
    // }
  //   )
  // }


  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  handleRating=(rating,review_id) => {
    // console.log(rating)
    // console.log(review_id)
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem('token')
      fetch(`http://localhost:3000/reviews/${review_id}`,{
        method:"PATCH",
        headers:{
          'Content-Type' :'application/json',
           "Authorization": `bearer ${token}`},
        body:JSON.stringify({
          rating: rating
        })
      })
      .then(resp=>resp.json())
      .then(pojo=>
        
        // console.log(pojo)
        this.props.updateRatingToState(pojo)
        
        )
    }
  }

  renderProductContainer=(routerProps) => {
    return <ProductContainer {...routerProps}/>
  }
  renderUserReviews=(routerProps) => {
    return <UserReview handleRating={this.handleRating} {...routerProps}/>
  }


  render(){
    console.log(this.props);
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          {/* <Route path="/profile" component={ ProfileContainer } /> */}
          <Route path="/products" render={this.renderProductContainer} />
          <Route path="/userreview" render={this.renderUserReviews} />

          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

export default connect(null, {initializeProducts, saveUserToState, updateRatingToState})(withRouter(App));
















//