import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import './Home.css';

function Producto(props) {
    console.log(props)
    return (
        <Container>
        <div className="Producto">
            <Container>
            <h1>{props.data.name}</h1>
            <h5>Descripcion:</h5>
            <p>{props.data.desc}</p>
            <span>SKU: {props.data.sku}</span><br/>
            <span>Precio: ${props.data.price}</span>
            <hr></hr>
            <div>
                <button><Link to={'/producto/detalle/'+props.id}>Comprar</Link></button>
            </div>
            </Container>
        </div>
        </Container>
    )
} 

export default Producto;