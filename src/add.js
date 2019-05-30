import React, { Component } from 'react';
// import StarRatingComponent from 'react-star-rating-component';


class AddMv extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 add-mrgn">
                <a href="#"> <img src={require('./plus.jpg')} alt="ajouter un element" /></a>
                </div>)
    }
}

export default AddMv;