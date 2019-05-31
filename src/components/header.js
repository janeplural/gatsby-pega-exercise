import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logoMobile from "../images/logo-mobile.svg"
import logoDesktop from "../images/logo-desktop.svg"

const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`
const Banner = styled.header`
  background-color: #1F2555;
  width: 100vw;
  min-height: 6.2rem;
  position: fixed;
  top: 0;
`
const Container = styled.div`
  width: 90vw;
  min-width: 33.3rem;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const LogoAddition = styled.div`
  display: flex;
  align-items: center;
`
const PWDetails = styled.p`
  margin-left: 7px;
  font-size: 12px;
  line-height: ${12 * 1.4}px;
  color: #FEB53A;

  .uppercase {
    text-transform: uppercase;
  }
`
const OpenMenu = styled.button`
  transition: 250ms all;
  height: 6.2rem;
  user-select: none;
  width: 5rem;

  :hover, 
  .active {
    transition: 250ms all;
    background-color: transparent;
  }
`
const OpenMenuBar = styled.div`
  background: #fff;
  height: .3rem;
  width: 3rem;
  transition: 250ms all;

  ::before,
  ::after {
    background: white;
    content: '';
    display: block;
    height: .3rem;
    width: 3rem;
    transition: 250ms all;
  }
  ::before {
    transform: translateY(-0.75rem);
  }
  ::after {
    transform: translateY(0.5rem);
  }
  .active {
    background-color: transparent;
  }
  @media (min-width: 992px) {
    display: none;
  }
`
const MainMenu = styled.nav`
  color: #fff;
  user-select: none;
  align-self: flex-end;
  width: 100%;
  transition: display 250ms ease-in;
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: auto;
  }
`
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`
const MenuLink = styled.li`
  margin: 1.4rem 1rem;
  font-size: 1.4rem;
  
  a {
    text-decoration: none;
    color: #fff;
  }

  @media (min-width: 992px) {
    margin-right: 1.4rem;
  }
`
const RegisterButton = styled.button`
  width: 12.2rem;
  border: none;
  border-radius: .3rem;
  padding: 1.4rem 2.8rem;
  background-color: #FEB53A;
  color: #1F2555;
  font-size: 1.6rem;
  font-weight: 800;
`

function ToggleMenu(e) {
  const classNames = ['menu-opener', 'menu-opener-inner', 'menu']
  return classNames.forEach(menuClass => {
    document.getElementsByClassName(menuClass)[0].classList.toggle('active')
  })
}

const Header = () => (
  <Banner>
    <Container>
      <LogoAddition>
        <picture>
          <source media="(max-width: 576px)" srcSet={logoMobile}></source>
          <source media="(min-width: 577px)" srcSet={logoDesktop}></source>
          <img src={logoMobile} alt="Pega logo"/>
        </picture>
        <PWDetails>Pega<span className="uppercase">world</span><br />June 3-7, 2019</PWDetails>
      </LogoAddition>

      <OpenMenu
        className="menu-opener" 
        onClick={(e) => ToggleMenu(e)}
      >
        <SrOnly className="sr-only">Open main menu</SrOnly>
        <OpenMenuBar aria-hidden="true" className="menu-opener-inner"></OpenMenuBar>
      </OpenMenu>

      <MainMenu className="menu">
        <MenuList className="menu-inner">
          <MenuLink className="menu-link">
            <Link to="/">Home</Link>
          </MenuLink>
          <MenuLink className="menu-link">
            <Link to="/details/">Details</Link>
          </MenuLink>
          <MenuLink className="menu-link">
            <Link to="/agenda/">Agenda</Link>
          </MenuLink>
          <MenuLink className="menu-link">
            <Link to="/pavillion/">Tech Pavillion</Link>
          </MenuLink>
          <MenuLink className="menu-link">
            <Link to="/experience/">Experience</Link>
          </MenuLink>
          <MenuLink as="div">
            <RegisterButton>Register</RegisterButton>
          </MenuLink>
        </MenuList>
      </MainMenu>

      </Container>
  </Banner>
)

export default Header



  // <OpenMenuButton aria-label="Open main menu">
        
  //       <span aria-hidden="true">&#9776;</span>
  //     </OpenMenuButton>


  // <MainMenu aria-label="Main menu">
  //       <CloseMenuButton aria-label="Close main menu">
  //         <SrOnly className="sr-only">Close main menu</SrOnly>
  //         <span aria-hidden="true">&#10799;</span>
  //       </CloseMenuButton>
  //       <NavLinks>
  //         <li>Home</li>
  //         <li>Details</li>
  //         <li>Agenda</li>
  //         <li>Tech Pavillion</li>
  //         <li>Experience</li>
  //         <button>Register</button>
  //       </NavLinks>
  //     </MainMenu>