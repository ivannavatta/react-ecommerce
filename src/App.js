import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import AboutUsPages from "./components/Pages/AboutUsPages";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";
import ProductsDetailsContainer from "./components/ProductsDetails/ProductsDetailsContainer";
import { CartProvider } from "./Context/CartContext";
import CartDetails from "./components/CartDetails/CartDetails";
import FormList from "./components/Form/FormList";
import ShoppingCart from "./components/CartDetails/Tabla";
import { useState } from "react";




function App() {

  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [phone, setPhone] = useState('')
return (
<>




  <BrowserRouter>
  <CartProvider>
  <NavBar email={email} setEmail={setEmail} nombre={nombre} setNombre={setNombre} phone={phone} setPhone={setPhone}/>
  
  <Routes>
    
  <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products/>} />
   <Route path="/products/:id" element={<ProductsDetailsContainer/>}/>
   <Route path="/cart" element={<CartDetails email={email} nombre={nombre} phone={phone}/> }/>
    <Route path='/aboutus' element={<AboutUsPages/>} />

  </Routes>
  
  </CartProvider>
  </BrowserRouter>
  

  


</>

);
}



export default App;


