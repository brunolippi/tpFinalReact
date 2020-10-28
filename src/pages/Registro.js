import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import {Container, Card, Button} from 'react-bootstrap';
import firebase from '../config/firebase'

const Registro = (props) => {
    
    const [usuario,setUsuario] = useState({
        user: '',
        password: ''
    })

    const handleRegister = (e) => {
        let user = usuario.user
        let password = usuario.password
        firebase.auth.createUserWithEmailAndPassword(user, password)
        e.preventDefault()
    }

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setUsuario({
            ...usuario,
            [name]: value
        })
    }

        return (
            <Container>
                <div id="login">
                    <Card>
                        <Card.Header as="h3">Registro</Card.Header>
                        <Card.Body>
                    <form onSubmit={handleRegister}>
                        <label>Nombre</label><br />
                        <input type="text" placeholder="Introduzca su nombre"/>
                        <br />
                        <br />
                        <label>Apellido</label><br />
                        <input type="text" placeholder="Introduzca su apellido"  />
                        <br />
                        <br />
                        <label>Usuario</label><br />
                        <input type="text" placeholder="Introduzca su usuario"  />
                        <br />
                        <br />
                        <label>Contraseña</label><br />
                        <input type="password" placeholder="Introduzca su contraseña" /><br />
                        <br />
                        <Button type='submit'>Registrarse</Button>
                    </form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        )
}
export default Registro;