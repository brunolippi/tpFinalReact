import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Perfil extends Component {
    datos;
    constructor(props) {
        super(props)
        console.log("props", this.props.datos)
    }

    render() {
        return(
            <div>
                <h2>Nombre: {this.props.datos.name}</h2>
            </div>
        )
    }
}

export default Perfil