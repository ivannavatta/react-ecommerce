import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import AboutUsPages from "./components/Pages/AboutUsPages";

import ProductsDetails from "./components/ProductsDetails/ProductsDetails";
import ProductsDetailsContainer from "./components/ProductsDetails/ProductsDetailsContainer";




function App() {
return (
<>




  <BrowserRouter>
  
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products/>} />
   <Route path="/products/:id" element={<ProductsDetailsContainer/>}/>
    <Route path='/aboutus' element={<AboutUsPages/>} />

  </Routes>
  </BrowserRouter>

  


</>

);
}



export default App;

