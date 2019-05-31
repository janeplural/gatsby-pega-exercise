import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    padding-top: 6.2rem;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .menu.active {
    transition: display 250ms ease-in;
    display: block;
  }
  .menu-opener-inner.active::before {
    transform: translateY(-0.1rem) rotate(-45deg);
  }
  .menu-opener-inner.active::after {
    transform: translateY(-0.4rem) translateX(0rem) rotate(45deg);
  }
`