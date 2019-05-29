import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
            keyword: "",
            mvrate:""
        };
    }
    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue });
    }

    handelchange = (event) => {
        this.setState({ keyword: event.target.value })
        this.props.searchname(event.target.value)
    }

    handelchangerate = (rating) => {
        this.setState({ mvrate: rating })
        this.props.searchrate(rating)
    }

    render() {
        const { rating } = this.state;

        return (<div className="header-style container">
            <div className="row">
                <InputGroup className="search-bar">
                    <FormControl
                        type="text"
                        onChange={(e)=>this.handelchange(e)}
                        placeholder="Search Movies"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        size={24}
                    />
                    <InputGroup.Append className="header-style">
                        <Button className="search-btn" variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div className="rating-style">
                <strong>Search by Rate:</strong>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={(e) => { this.onStarClick(e); this.handelchangerate(e)}} 
                />
            </div>
        </div>);
    }
}

export default Header;