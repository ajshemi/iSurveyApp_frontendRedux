import React, { Component } from 'react';

class ReviewForm extends Component {
    state = { 
        rating:0
     }
     handleChange=(e) => {
         console.log(e)
     }
    //  handleSubmit=(e) => {
    //      console.log(e)
    //  }
    render() { 
        return (
            // <form onSubmit={this.handleSubmit}>
            <label>
              Pick Rate from 1--5 :
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            // <input type="submit" value="Submit" />
        //   </form>

        );
    }
}
 
export default ReviewForm;