import React, {useState, useEffect} from 'react'
import firebase from '../config/firebase'

function ProductoEditar(props) {

    const [datos,setDatos] = useState({name:'', desc:'', sku:'', price:''})

    useEffect(
        () => {
            firebase.db.doc('productos/'+props.match.params.id)
            .get()
            .then(doc => {
                setDatos(doc.data())
            })
            .catch(error => {
              console.log(error);
          });
      }, []); 

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
        const id = props.match.params.id
        firebase.db.doc('productos/'+id).set({
            name: datos.name,
            desc: datos.desc,
            sku: datos.sku,
            price: datos.price
        })
        .then(doc=>{console.log(doc)})
        e.preventDefault();

    }
    return(
        <div className='container'>
            <form onSubmit={handleSubmit }>
                <div>
                    <label>Nombre</label>
                    <input type='text' name='name' value={datos.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>Descripcion</label>
                    <input type='text' name='desc' value={datos.desc} onChange={handleChange}/>
                </div>
                <div>
                    <label>SKU</label>
                    <input type='text' name='sku' value={datos.sku} onChange={handleChange}/>
                </div>
                <div>
                    <label>Precio</label>
                    <input type='text' name='price' value={datos.price} onChange={handleChange}/>
                </div>
                <input class="btn btn-primary" type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default ProductoEditar