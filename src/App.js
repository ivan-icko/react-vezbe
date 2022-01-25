import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Products from './components/Products.jsx';

function App() {
  const prom=<h1>Cao svima!</h1>
  return (
    <div className="App">
   
      <NavBar></NavBar>
      <Products></Products>
    </div>
  );
}

export default App;
