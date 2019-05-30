import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { InputGroup, FormControl, Button } from "react-bootstrap";
class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rating:"1"
         }
    }

onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue },()=>this.props.searchrate(this.state.rating))
    
}

    render() { 
        return (<div className="rating-style container">
        <strong>Search by Rate:</strong>
        <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
        />
        <Button className="search-btn" variant="outline-secondary" onClick={this.props.defaultRates}>reset rate</Button>
    </div>);
    }
}
 
export default Stars;