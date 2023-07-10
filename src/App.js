import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import CoinDetails from "./Components/CoinDetails";
import Foter from "./Components/Foter";

function App() {
  return (
   <>
<Router>

<Header/>
  <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/Coins" element={ <Coins/>}/>
    <Route path="/Exchanges" element={ <Exchanges/>}/>
    <Route path="/Coin/:id" element={ <CoinDetails/>}/>
  </Routes>
  <Foter/>
</Router>
   </>
  );
}

export default App;
