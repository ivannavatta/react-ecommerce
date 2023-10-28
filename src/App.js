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




function App() {

  
return (
<>




  <BrowserRouter>
  <CartProvider>
  <NavBar/>
  
  <Routes>
    
  <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products/>} />
   <Route path="/products/:id" element={<ProductsDetailsContainer/>}/>
   <Route path="/cart" element={<CartDetails/>}/>
    <Route path='/aboutus' element={<AboutUsPages/>} />

  </Routes>
  </CartProvider>
  </BrowserRouter>
  

  


</>

);
}



export default App;


