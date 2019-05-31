import React, { Component } from 'react';
import { CardGroup } from "react-bootstrap";
import MvCard from './moviecard'
import Add from './add'

class MoviListe extends Component {
    newMovie = (r, tof, title) => {
        this.props.newMovie(r, tof, title)
    }
    render() {
        const { liste } = this.props
        return (<div className="container">
            <CardGroup className="row">
                {liste.map((el, i) => <MvCard movie={el} key={i} />)}
                <Add newMovie={this.newMovie} />
            </CardGroup>

        </div>);
    }
}

export default MoviListe;