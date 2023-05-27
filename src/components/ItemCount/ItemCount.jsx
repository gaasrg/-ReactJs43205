import React from 'react'
import { useState } from 'react'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button style={{ backgroundColor: 'transparent', color: '#ffffff', padding: '10px 20px', border: 'none', cursor: 'pointer', margin: '5px' }} onClick={decrementar}> - </button>
                <p style={{ fontSize: '24px', margin: '0 10px', color: '#ffffff', }}>{contador}</p>
                <button style={{ backgroundColor: 'transparent', color: '#ffffff', padding: '10px 20px', border:'none', borderRadius: '20%', cursor: 'pointer', margin: '5px' }} onClick={incrementar}> + </button>
            </div>


            <button style={{ fontSize: '20px', backgroundColor: 'transparent', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '10%', cursor: 'pointer', margin: '5px' }} onClick={() => funcionAgregar(contador)}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount