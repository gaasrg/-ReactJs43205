import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, img, description, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos Agregados:" + cantidad);
  }
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>{description}</p>
        <img src= {img} alt={nombre} style={{ borderRadius: '2%' }}/>
        <br/>
        {
          agregarCantidad > 0 ? (<Link to ="/cart" style={{ fontSize: '20px',textDecoration: 'none', backgroundColor: 'transparent', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '10%', cursor: 'pointer', margin: '5px' }} > Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail