export const products = [
    {
        id: 1,
        name: 'Apple watch serie 9',
        price : 900,
        category: 'apple',
        color: 'pink',
        img: '../img/apple watch.png',
        stock: 7,
        description: 'El Apple Watch serie 9 es un dispositivo inteligente que ofrece seguimiento de la salud, productividad y entretenimiento.'

    },
    {
        id: 2,
        name: 'Galaxy watch 6',
        price : 300,
        category: 'samsung',
        color: '#ffffff',
        img: '../img/galaxy watch.avif',
        stock: 13,
        description: 'El Galaxy Watch 6 es un reloj inteligente versátil que ofrece seguimiento de la salud, productividad y entretenimiento. Equipado con el sensor BioActive.'

    },
    {
        id: 3,
        name: 'Amazfit watch GTS 4',
        price : 450,
        category: 'amazon',
        img: '../img/amazfit watch.png',
        stock: 20,
        description: 'El Amazfit Watch GTS 4 es un reloj inteligente ligero con GPS incorporado, monitoreo de la frecuencia cardíaca y del sueño.La batería dura hasta 15 días.'

    },
    {
        id: 4,
        name: 'Galaxy watch5 pro',
        price : 570,
        category: 'samsung',
        img: '../img/galaxy watch5 pro.png',
        stock: 25,
        description: 'Galaxy Watch5 Pro: Elegante reloj inteligente con seguimiento avanzado de la salud y conectividad de última generación para tu estilo de vida activo.'

    },
    {
        id: 5,
        name: 'Apple watch ultra 2',
        price : 1200,
        category: 'apple',
        img: '../img/apple watch ultra 2.png',
        stock: 4,
        description: 'El Apple Watch Ultra 2 combina estilo y funcionalidad avanzada con una pantalla nítida, seguimiento de salud y notificaciones inteligentes.'

    },
    {
        id: 6,
        name: 'Galaxy watch4 Classic',
        price : 200,
        category: 'samsung',
        img: '../img/galaxy watch4 classic.png',
        stock: 37,
        description: 'El Galaxy Watch4 Classic combina estilo y funcionalidad, ofreciendo un diseño elegante y características avanzadas.'

    },
    {
        id: 7,
        name: 'Amazfit GTR 3',
        price : 320,
        category: 'amazon',
        img: '../img/amazfit gtr 3.png',
        stock: 70,
        description: 'El Amazfit GTR 3 es un elegante smartwatch con seguimiento de salud avanzado y batería de larga duración.'

    },
    {
        id: 8,
        name: 'Amazfit GTR 4 Limited',
        price : 1000,
        category: 'amazon',
        img: '../img/amazfit gtr 4 limited.png',
        stock: 2,
        description: 'Amazfit GTR 4 Limited: Elegancia y tecnología se fusionan en este smartwatch de edición limitada. Estilo y rendimiento excepcionales.'

    }
]

export const getData = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },3000)
    })
} 

export const getIdData = (productsId) =>{
    return new Promise((resolve) => {
        
            const product = products.find(prod => prod.id === productsId)
            resolve(product || null)

       
    })
}
    
