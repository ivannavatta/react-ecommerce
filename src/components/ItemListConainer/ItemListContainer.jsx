import { useEffect, useState } from "react"
import { getProducts } from "../products/products"
import ItemList from "../ItemList/ItemList"

function ItemListContainer ({greeting}) {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return(
        <div>
            <h1>{greeting}</h1>
        <ItemList products={products}/>
        </div>
        

    )
}

export default ItemListContainer