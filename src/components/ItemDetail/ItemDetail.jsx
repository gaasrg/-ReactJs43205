import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, description, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }
  return (
      <div className='contenedorItem'>
        <div>
          <h2>Nombre: {nombre} </h2>
          <h3>Precio: {precio} </h3>
          <h3>ID: {id} </h3>
          <p>{description}</p>
          {
            agregarCantidad > 0 ? (<Link className='terminarc' to="/cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
          }
        </div>
        <div>
          <img className='detailimg' src={img} alt={nombre} />
        </div>
      </div>
  )
}

export default ItemDetail