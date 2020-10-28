import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import {Container, Button, Card} from 'react-bootstrap';
import './Home.css'
import firebase from '../config/firebase'

const Login = (props) => {

    const [usuario, setUsuario] = useState({
        user: '',
        password: ''
    })

    const handleLogin = (event) => {
        firebase.auth.signInWithEmailAndPassword(usuario.user, usuario.password)
        .then(data=> {
            console.log(data)
        })
        event.preventDefault()
    }

    const handleForm = (event) => {
        setUsuario({...usuario,[event.target.name]: event.target.value})
        event.preventDefault()
    }

    return (
        <Container>
            <div id="login">
                <Card>
                    <Card.Header as="h3">Login</Card.Header>
                    <Card.Body>
                <form onSubmit={handleLogin}>
                    <label>Usuario</label><br />
                    <input type="text" placeholder="Introduzca su usuario" name='user' value={usuario.user} onChange={handleForm} />
                    <br />
                    <br />
                    <label>Contraseña</label><br />
                    <input type="password" placeholder="Introduzca su contraseña" name='password' value={usuario.password} onChange={handleForm} /><br />
                    <br />
                    <Button type='submit'>Ingresar</Button>
                </form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Login;