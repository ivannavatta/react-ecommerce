const Products = [
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
        img: '../img/amazfit watch.webp',
        stock: 20,
        description: 'amazfit gts 4'

    }
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(Products)
        },2000)
    })
}