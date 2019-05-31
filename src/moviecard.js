import React from 'react';
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

class MvCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1
        };
    }
    onStarClick = (nextValue) => {
        this.setState({ rating: nextValue });
    }
    render() {
        return (<div className="col-lg-4 col-md-6 col-sm-12 card-mrgn">
            <Card>
                <div className="rating-style">
                    <strong>Rate: {this.props.movie.rating}</strong>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.props.movie.rating}
                        onStarClick={this.onStarClick}
                    />
                </div>
                <Card.Img variant="top" src={this.props.movie.tof} />
                <Card.Footer>
                    <small className="text-muted">{this.props.movie.title}</small>
                </Card.Footer>
            </Card>
        </div>)
    }
}

export default MvCard