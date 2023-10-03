const Products = [
    {
        id: 1,
        name: 'Apple watch',
        price : 900,
        category: 'apple',
        img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML763_VW_34FR+watch-case-45-aluminum-starlight-nc-s9_VW_34FR+watch-face-45-aluminum-starlight-s9_VW_34FR_WF_CO?wid=2560&hei=1640&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=MEp1NU0yNHJrRzJPTzV4alVta3BRcWc4WVhrTUNGaFJqVEpXMnB1Zy83eitXSjNialExcG1CNUplQlpFSTFUWnJUamJnejRPUisxcE0vUVlzaFBXN2tkNGpsUS9ETU41eFQ0TzIrUnpZdC96RkJQdjRNRTIrNGkzcG9kQUxoSHp3aldZQ2kyQUlhdmQ2UWtiNU9Mdk1ncjBxT0ozbUZ1eG5GcGlSenIrOGo2YmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMGdNL3BvRkdKVDVQdS91YnVnbnJuZ3JPZ0xXb3dPVUV6bytXY1hzR2F1cg',
        stock: 7,
        description: 'apple watch serie 9'

    },
    {
        id: 2,
        name: 'Galaxy watch',
        price : 300,
        category: 'samsung',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/2307/gallery/ar-galaxy-watch6-r935-sm-r930nzeaaro-537402293?$1300_1038_PNG$',
        stock: 13,
        description: 'galaxy watch 6'

    },
    {
        id: 3,
        name: 'Amazfit watch',
        price : 450,
        category: 'amazon',
        img: 'https://es.amazfit.com/cdn/shop/products/3_077110c9-498b-4d6f-b06e-40dc9b9b84c9_1024x1024.jpg?v=1671095893',
        stock: 20,
        description: 'amazfit gts 4'

    }
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(Products)
        },500)
    })
}