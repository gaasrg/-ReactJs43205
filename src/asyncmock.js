const productos = [
    { nombre: "MacBook Air M2", precio: 1260000, stock: 10, id: "1", img: "../img/macm2.jpeg", idCat: "2", description: "La nueva MacBook Air, rediseñada para aprovechar toda la potencia del revolucionario chip M2, combina una velocidad increíble y una gran eficiencia energética en una carcasa de aluminio resistente e increíblemente delgada." },
    { nombre: "MacBook Pro M2", precio: 1359000, stock: 10, id: "2", img: "../img/macprom2.jpeg", idCat: "2", description: "La MacBook Pro estrena una potencia y una eficiencia sin precedentes de la mano de los chips M2 Pro y M2 Max. Tiene un rendimiento fuera de serie, incluso cuando no está conectada a la corriente. Una batería que te acompaña por más tiempo. Una espectacular pantalla Liquid Retina XDR. Y todos los puertos que necesitas."},
    { nombre: "Iphone 14", precio: 2000000, stock: 5, id: "3", img: "../img/i14.jpeg", idCat: "3", description: "El iPhone 14 cuenta con una pantalla de 6,1 pulgadas (15 cm) con tecnología Super Retina XDR OLED con una resolución de 2532×1170 píxeles y una densidad de píxeles de aproximadamente 460 PPI con una frecuencia de actualización de 60 Hz." },
    { nombre: "Iphone 14 Pro", precio: 2300000, stock: 10, id: "4", img: "../img/ipro.jpeg", idCat: "3", description: "La pantalla del iPhone 14 Pro tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.12 pulgadas en diagonal (el área real de visualización es menor"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 200)
    })
}