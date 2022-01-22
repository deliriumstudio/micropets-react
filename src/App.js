import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Shop from "./pages/Shop";
import Inventory from "./pages/Inventory";
import Levelup from "./pages/Levelup";
import Marketplace from "./pages/Marketplace";
import ConnectWallet from "./pages/ConnectWallet";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="pets" element={<Pets/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="inventory" element={<Inventory/>}/>
          <Route path="levelup" element={<Levelup/>}/>
          <Route path="marketplace" element={<Marketplace/>}/>
          <Route path="wallet" element={<ConnectWallet/>}/>
        </Routes>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
