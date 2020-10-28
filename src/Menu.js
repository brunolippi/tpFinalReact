import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Menu.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">InsumosIT</Navbar.Brand>
            <Nav className="mr-auto">
            {this.props.data.map(opcion=><Nav.Link href={opcion.path}>{opcion.name}</Nav.Link>)}
            </Nav>
          </Navbar>
          </>
        )
    }
}

export default Menu;