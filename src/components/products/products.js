export const products = [
    {
        id: 1,
        name: 'Apple watch',
        price : 900,
        category: 'apple',
        img: '../img/apple watch.png',
        stock: 7,
        description: 'apple watch serie 9'

    },
    {
        id: 2,
        name: 'Galaxy watch',
        price : 300,
        category: 'samsung',
        img: '../img/galaxy watch.avif',
        stock: 13,
        description: 'galaxy watch 6'

    },
    {
        id: 3,
        name: 'Amazfit watch',
        price : 450,
        category: 'amazon',
        img: '../img/amazfit watch.png',
        stock: 20,
        description: 'amazfit gts 4'

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
        setTimeout(() =>{
            const product = products.find(prod => prod.id === productsId)
            resolve(product || null)

        },5000)
    })
}
    
