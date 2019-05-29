import React, { Component } from 'react';
import { CardGroup} from "react-bootstrap";
import MvCard from './moviecard'
import AddMv from './add'

class MoviListe extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let lst= this.props.liste
        return (<div className="container">
            <CardGroup className="row">
            {lst.map((el, i) => <MvCard  movie={el} key={i}/>) }
            <AddMv />
            </CardGroup>

        </div>);
    }
}

export default MoviListe;