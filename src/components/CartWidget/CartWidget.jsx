import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
  
  return (
    <div>
      <Link to='/cart' style={{ textDecoration: 'none', color: '#ffffff' }}>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <span> {cantidadTotal} </span>
        }
      </Link>
    </div>
  )
}

export default CartWidget