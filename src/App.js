import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from "./components/Pages/AboutUs";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Productos";

function App() {
return (
<>




  <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home/>} />
    <Route path='/productos' element={<Products/>} />
    <Route path='/aboutus' element={<AboutUs/>} />

  </Routes>
  </BrowserRouter>

  


</>

);
}



export default App;
