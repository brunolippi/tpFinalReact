import React, { useState, useEffect } from 'react';
import Producto from './Producto'
import { getById } from '../services/Productos'
import firebase from '../config/firebase'

const ProductoDetalle = (props)=> {
      const[producto,setProducto] = useState({})
      useEffect(
        () => {
            firebase.db.doc('productos/'+props.match.params.id)
            .get()
            .then(doc => {
                setProducto(doc.data())
            })
            .catch(error => {
              console.log(error);
          });
      }, []); 
   
    return (<>
        {
            producto && 
            <div className='container'>
                <Producto data={producto}/>
            </div>
        }
         </>)
}


export default ProductoDetalle;