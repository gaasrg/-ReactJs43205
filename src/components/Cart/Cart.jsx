import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 style={{color: '#ffffff'}} > No hay productos en el carrito</h2>
                <Link className="botonlink" to='/'> Ver Productos </Link>
            </>
        )
    }
    return (
        <div className="ordencart">
            <div>
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            </div>
            
            <div>
                <h3>Total: $ {total} </h3>
                <h3>Cantidad total: {cantidadTotal} </h3>
                <button className="aboton" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                <br />
                <Link className="botonlink" to='/checkout' > Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart