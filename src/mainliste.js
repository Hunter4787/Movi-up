import React, { Component } from 'react';
import { CardGroup} from "react-bootstrap";
import MvCard from './moviecard'
import AddMv from './add'

class MoviListe extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const{liste}= this.props
        return (<div className="container">
            <CardGroup className="row">
            {liste.map((el, i) => <MvCard  movie={el} key={i}/>) }
            <AddMv />
            </CardGroup>

        </div>);
    }
}

export default MoviListe;