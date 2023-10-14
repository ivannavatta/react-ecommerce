export const products = [
    {
        id: 1,
        name: 'Apple watch serie 9',
        price : 900,
        category: 'apple',
        color: 'pink',
        img: '../img/apple watch.png',
        stock: 7,
        description: 'El Apple Watch serie 9 es un dispositivo inteligente que ofrece seguimiento de la salud, productividad y entretenimiento.',
        day: 'Friday',
        specification: [
            '1.5" Retina display with vivid and crisp visuals.',
            'Water-resistant up to 50 meters, suitable for swimming and rainy days.',
            'Built-in GPS and Bluetooth for enhanced connectivity.',
            'Comprehensive health monitoring: heart rate, sleep, blood oxygen, and more.',
            '270mAh battery with a battery life of up to 15 days.',
            'Compatible with Android 7.0 and iOS 12.0, includes a charger.'
        ]

    },
    {
        id: 2,
        name: 'Galaxy watch 6',
        price : 300,
        category: 'samsung',
        color: '#ffffff',
        img: '../img/galaxy watch.png',
        stock: 13,
        description: 'El Galaxy Watch 6 es un reloj inteligente versátil que ofrece seguimiento de la salud, productividad y entretenimiento. Equipado con el sensor BioActive.',
        day: 'Saturday',
        specification: [
            '1.4" AMOLED touch screen display for clear visuals.',
            'Water-resistant design, suitable for swimming and rainy conditions.',
            'Built-in GPS and Bluetooth connectivity for enhanced features.',
            'Comprehensive health tracking, including heart rate and sleep monitoring.',
            '80-hour battery life and fast charging capabilities.',
            'Connectivity options include Bluetooth and Wi-Fi.',
            'Supports audio playback.'
        ]

    },
    {
        id: 3,
        name: 'Amazfit watch GTS 4',
        price : 450,
        category: 'amazon',
        img: '../img/amazfit watch.png',
        stock: 20,
        description: 'El Amazfit Watch GTS 4 es un reloj inteligente ligero con GPS incorporado, monitoreo de la frecuencia cardíaca y del sueño.La batería dura hasta 15 días.',
        day: 'Friday',
        specification: [
            '1.65" AMOLED display for clear and crisp visuals.',
            'Water-resistant up to 50m, ideal for swimming and rainy days.',
            'Built-in GPS and Bluetooth for enhanced connectivity.',
            'Health monitoring: heart rate, sleep, oxygen, and more.',
            '270mAh battery with a lifespan of up to 15 days.',
            'Compatible with Android 7.0 and iOS 12.0, includes charger.'
        ]

    },
    {
        id: 4,
        name: 'Galaxy watch5 pro',
        price : 570,
        category: 'samsung',
        img: '../img/galaxy watch5 pro.png',
        stock: 25,
        description: 'Galaxy Watch5 Pro: Elegante reloj inteligente con seguimiento avanzado de la salud y conectividad de última generación para tu estilo de vida activo.',
        day: 'Thursdays',
        specification: [
            '1.4" SAMOLED touchscreen.',
            'Included sensors: accelerometer, barometer, pedometer, heart rate monitor, bioelectrical impedance analysis sensor, ambient light sensor, optical heart rate sensor (PPG).',
            '16GB internal memory capacity.',
            '80-hour battery life and fast charging.',
            'Bluetooth and Wi-Fi connectivity.',
            'Audio playback capability.'
        ]

    },
    {
        id: 5,
        name: 'Apple watch ultra 2',
        price : 1200,
        category: 'apple',
        img: '../img/apple watch ultra 2.png',
        stock: 4,
        description: 'El Apple Watch Ultra 2 combina estilo y funcionalidad avanzada con una pantalla nítida, seguimiento de salud y notificaciones inteligentes.',
        day: 'wednesday',
        specification: [
            '49mm titanium case size',
            'Carbon neutral combinations available',
            'Always-On Retina display, Up to 3000 nits',
            'S9 SiP, Double tap gesture, Faster on-device Siri with health data access, Precision Finding for iPhone',
            'Up to 36 hours, Up to 72 hours in Low Power Mode, Fast charging',
            'Temperature sensing, Cycle Tracking with retrospective ovulation estimates'
          ]

    },
    {
        id: 6,
        name: 'Galaxy watch4 Classic',
        price : 200,
        category: 'samsung',
        img: '../img/galaxy watch4 classic.png',
        stock: 37,
        description: 'El Galaxy Watch4 Classic combina estilo y funcionalidad, ofreciendo un diseño elegante y características avanzadas.',
        day: 'Monday',
        specification: [
            '1.4" AMOLED display for clear and vibrant visuals.',
            'Water-resistant up to 50 meters, suitable for swimming and rainy days.',
            'Integrated GPS and Bluetooth for seamless connectivity.',
            'Comprehensive health tracking: heart rate, sleep, blood oxygen, and more.',
            'Long-lasting 270mAh battery with up to 15 days of battery life.',
            'Compatible with Android 7.0 and iOS 12.0, includes a charger.']

    },
    {
        id: 7,
        name: 'Amazfit GTR 3',
        price : 320,
        category: 'amazon',
        img: '../img/amazfit gtr 3.png',
        stock: 70,
        description: 'El Amazfit GTR 3 es un elegante smartwatch con seguimiento de salud avanzado y batería de larga duración.',
        day: 'Monday',
        specification: [
            '1.7" AMOLED display for crisp and vibrant visuals.',
            'Water-resistant up to 100 meters, ideal for swimming and rainy days.',
            'Built-in GPS and Bluetooth for seamless connectivity.',
            'Comprehensive health monitoring: heart rate, sleep, blood oxygen, and more.',
            'Impressive 430mAh battery with up to 12 days of battery life.',
            'Compatible with Android 7.0, charging cable included.'
        ]

    },
    {
        id: 8,
        name: 'Amazfit GTR 4 Limited',
        price : 1000,
        category: 'amazon',
        img: '../img/amazfit gtr 4 limited.png',
        stock: 2,
        description: 'Amazfit GTR 4 Limited: Elegancia y tecnología se fusionan en este smartwatch de edición limitada. Estilo y rendimiento excepcionales.',
        day: 'Sunday',
        specification: [
            '1.7" AMOLED display for crisp and vibrant visuals.',
            'Water-resistant up to 100 meters, ideal for swimming and rainy days.',
            'Built-in GPS and Bluetooth for seamless connectivity.',
            'Comprehensive health monitoring: heart rate, sleep, blood oxygen, and more.',
            'Impressive 430mAh battery with up to 12']

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
        
            const product = products.find(prod => prod.id === parseInt(productsId))
            resolve(product || null)

       
    })
}


    
