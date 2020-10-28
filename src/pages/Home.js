import React, {Component} from 'react';
import Producto from './Producto'
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import './Home.css'
import firebase from '../config/firebase'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state= {
            productos: []
        }
    }

    componentDidMount(){
        firebase.db.collection('productos')
        .get()
        .then(querySnapshot => {
        console.log('query', querySnapshot.docs);
        this.setState({
            productos: querySnapshot.docs
        })
      })
    }
    render() {
        return(
            <Container>
            <div className="Home">
                
                {this.state.productos.map(producto => <Producto key={producto.id} id={producto.id} data={producto.data()} />)}
                <hr/>
            </div>
           </Container> 
        )
    }
}

export default Home;
