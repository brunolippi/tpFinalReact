import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Menu from './Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import ProductoDetalle from './pages/ProductoDetalle';
import ProductoEditar from './pages/ProductoEditar';
import { getProductos } from './services/Productos';
import ProductoAlta from './pages/ProductoAlta';
import firebase from './config/firebase'

function App() {
  const [estado,setEstado] = useState({
    opcionesMenu:[{name:'Home',path:"/"},{name:'Login',path:"/login"},{name:'Registro',path:"/registro"},{name:'Producto Alta',path:"/producto/alta"}]
  })
  const handleClick = ()=>{
      setEstado({...estado,opcionesMenu:[{name:'Home',path:"/"},{name:'Logout',path:"/login"},{name:'Producto Alta',path:"/producto/alta"}]})
  }
  return (
    <BrowserRouter>
                  
        <Menu data={estado.opcionesMenu} click={handleClick}/>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/producto/detalle/:id" component={ProductoDetalle} />
        <Route path="/producto/alta" component={ProductoAlta} />
        <Route path="/producto/editar/:id" component={ProductoEditar} />
        
        
        
    </BrowserRouter>
  );
}

export default App;