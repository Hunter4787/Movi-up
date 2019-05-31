import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from "react-bootstrap";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }

    }
    handelchange = (event) => {
        this.setState({ keyword: event.target.value }, () => this.props.searchname(this.state.keyword))
    }

    render() {
        return (<div className="header-style container">
            <div className="row">
                <InputGroup className="search-bar">
                    <FormControl
                        type="text"
                        onChange={(e) => this.handelchange(e)}
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

        </div>);
    }
}

export default Header;