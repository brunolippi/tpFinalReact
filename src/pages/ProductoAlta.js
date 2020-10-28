import React, {useState} from 'react'
import firebase from '../config/firebase'
import {Container} from 'react-bootstrap'

function ProductoAlta() {

    const [datos,setDatos] = useState({name:'', desc:'', sku:'', price:''})

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setDatos({
            ...datos,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        firebase.db.collection('productos').add(datos)
        .then(doc=>{console.log(doc)})
        e.preventDefault();

    }
    return(
        <Container>
        <div>
            <form className='mt-3' onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label><br/>
                    <input type='text' name='name' value={datos.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>Descripcion</label><br/>
                    <input type='text' name='desc' value={datos.desc} onChange={handleChange}/>
                </div>
                <div>
                    <label>SKU</label><br/>
                    <input type='text' name='sku' value={datos.sku} onChange={handleChange}/>
                </div>
                <div>
                    <label>Precio</label><br/>
                    <input type='text' name='price' value={datos.price} onChange={handleChange}/>
                </div>
                <br/>
                <input class="btn btn-primary" type="submit" value="Guardar" />
            </form>
        </div>
        </Container>
    )
}

export default ProductoAlta