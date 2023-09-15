import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import 'boxicons'
import NavBar from "./components/NavBar/NavBar";
import TransitionsModal from "./components/modal/modal";





function App() {
return (
<>

<NavBar/>
<ItemListContainer  greeting={'Bienvenidos a mi ecommerce'}  />

<TransitionsModal/>



</>

);
}

export default App;
