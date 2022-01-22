import {Link} from "react-router-dom";

const TopNavbar = () => {
  return (
    <header className="App-Navbar">
      <div className="App-Navbar-Wrapper">

        <div>TopNavbar</div>
        <div>
          <ul>
            <li><Link to="/pets">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/levelup">Level Up & Rank Up</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
          </ul>
          <button className="Button">Connect Wallet</button>
        </div>
      </div>
    </header>
  )
}

export default TopNavbar
