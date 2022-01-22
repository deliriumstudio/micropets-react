import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

import logoLarge from '../../assets/logo-large.png'

const Header = styled.header`
  background: #82009f;
  background: -moz-linear-gradient(left, #82009f 0%, #5d34af 50%, #00ceab 100%);
  background: -webkit-linear-gradient(left, #82009f 0%, #5d34af 50%, #00ceab 100%);
  background: linear-gradient(to right, #82009f 0%, #5d34af 50%, #00ceab 100%);

  color: #fff;
  font-weight: bold;
`

const NavbarWrapper = styled.div`
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const NavLogo = styled.div`
  margin-top: 0.75rem;
`

const NavLogoImage = styled.img`
  height: 32px;
`

const NavLinks = styled.nav`
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 0 0 auto;
  font-size: 15px;
`

const NavLinksItem = styled(NavLink)`
  flex: 0 0 auto;
  display: inline-block;
  color: #ffffff;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  text-decoration: none;

  &:hover {
    color: rgba(185, 138, 196, 0.8);
  }
`

const NavEnd = styled.div`
`

const ConnectWalletButton = styled(NavLink)`
  text-decoration: none;
  background: #5d34af;
  padding: 0.75rem 1.25rem;
  border-radius: 7px;
  color: #fff;
  
  &:hover {
    background: #4f16c2;
  }
`

const Navbar = () => {
  return (
    <Header>
      <NavbarWrapper>
        <NavLogo>
          <NavLogoImage alt="Logo" src={logoLarge} />
        </NavLogo>
        <NavLinks>
          <NavLinksItem to="/pets">Home</NavLinksItem>
          <NavLinksItem to="/shop">Shop</NavLinksItem>
          <NavLinksItem to="/inventory">Inventory</NavLinksItem>
          <NavLinksItem to="/levelup">Level Up & Rank Up</NavLinksItem>
          <NavLinksItem to="/marketplace">Marketplace</NavLinksItem>
        </NavLinks>
        <NavEnd>
          <ConnectWalletButton to="/connect">Connect Wallet</ConnectWalletButton>
        </NavEnd>
      </NavbarWrapper>
    </Header>
  )
}

export default Navbar