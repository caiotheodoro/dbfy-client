import styled from 'styled-components'



export const LayoutContainer = styled.div`
  max-width: 56.25rem;
  height: calc(100vh - 2rem);
  margin: auto;
  width: 100%;
  position: relative;
  padding:  0 10px;

  .cover {
  background: url('/Background.png') no-repeat center center;
  background-size: cover;
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  height: 34rem;
  margin: auto;
  opacity: 0.5;
  filter: blur(160px);
}

main {
  padding-top: 200px;
}

`



interface NavbarProps {
  isScrolled: boolean;
}



export const Navbar = styled.header<NavbarProps>`
    width: 100%;
    left: 0;
    margin: auto;
    padding: ${(prop) => prop.isScrolled ? '0' : '0.5rem 0'};
 
    transition: all 0.3s ease-in-out;
    
    z-index: 10;
    position: fixed;
    background-color: ${(prop) => prop.isScrolled ? 'black' : 'transparent'};
    nav {
        display: flex;
        justify-content:space-around;
        align-items:center;
        padding: 1rem;
    }

  
`


export const Logo = styled.div`
    font-weight: bold;
    cursor: pointer;
    font-size: 1.875rem;
    color: #fff;
    border-radius: 50%;
    margin-bottom: -1px;
    padding: 0.5rem;
    border-bottom: 2px solid #fff;

    span {
        color: ${({ theme }) => theme['green']};
    }
`


