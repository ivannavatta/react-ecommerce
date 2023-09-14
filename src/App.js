import ItemListContainer from "./components/ItemListConainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer  greeting={'Bienvenidos a mi ecommerce'}  />
    </div>
  );
}

export default App;
