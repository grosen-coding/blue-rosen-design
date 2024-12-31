import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ isScrolled }) => (isScrolled ? '4.5rem' : '7rem')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ isScrolled }) => (isScrolled ? '0.2rem 0.4rem' : '1.2rem 2.4rem')};
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'black' : 'transparent'};
  color: white;
  opacity: ${({ isScrolled }) => (isScrolled ? 0.7 : 1)};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none'};
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  &:hover {
    background-color: black;
    opacity: 1;
  } 
`;

const LogoImage = styled.img<{ isScrolled: boolean }>`
  width: ${({ isScrolled }) => (isScrolled ? '75%' : '100%')};
  max-width: 100px;
  height: auto;
  /* margin: 0 auto; */
  margin-top: ${({ isScrolled }) => (isScrolled ? '0.5rem' : '0')};
  opacity: ${({ isScrolled }) => (isScrolled ? 1 : 0)};
  z-index: 1000;
  transition: all 0.5s ease-in-out !important;

  animation: logo 1s .7s forwards;

  @keyframes logo {
    0% {
      transform: scale(8.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }


  

`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;

`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
  height: auto;
  /* gap: 1rem; */
`;

const LogoSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

const TitleSide = styled.div<{ isScrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;


  h1 {
    font-size: ${({ isScrolled }) => (isScrolled ? '3rem' : '2rem')};
    margin: 0;
        text-transform: uppercase;

  }



    a {
    text-decoration: none;
    color: white;
    /* font-size: 1rem; */
    padding: 0;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
      color: #FFD700;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    position: relative;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: #FFD700;
      transform: scale(1.1);
      font-weight: bold;
    }

    &:active {
      transform: scale(0.95);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.secondary};

    }

    &:hover::after {
      width: 80%;
      left: 10%;
      transition: width 0.3s;
      transform-origin: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <NavbarLeft>
        <LogoSide>
      <Link to="/">
        <LogoImage
          src={logo}
          alt="Blue Rose Design Logo"
          isScrolled={isScrolled}
        />
      </Link>
      </LogoSide>
      <TitleSide>
      <Link to="/">
        <h1>Blue Rose</h1>
        <h3>Design</h3>
      </Link>
      </TitleSide>
      </NavbarLeft>

      <NavbarRight>
      <NavLinks>
        <Link
          to="/"
          style={{
            backgroundColor:
              location.pathname === '/' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            backgroundColor:
              location.pathname === '/about' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            backgroundColor:
              location.pathname === '/services'
                ? 'rgba(255, 255, 255, 0.2)'
                : 'transparent',
          }}
        >
          Services
        </Link>
        <Link
          to="/portfolio"
          style={{
            backgroundColor:
              location.pathname === '/portfolio'
                ? 'rgba(255, 255, 255, 0.2)'
                : 'transparent',
          }}
        >
          Portfolio
        </Link>
        <Link
          to="/design-process"
          style={{
            backgroundColor:
              location.pathname === '/design-process'
                ? 'rgba(255, 255, 255, 0.2)'
                : 'transparent',
          }}
        >
          Design Process
        </Link>
        <Link
          to="/contact"
          style={{
            backgroundColor:
              location.pathname === '/contact'
                ? 'rgba(255, 255, 255, 0.2)'
                : 'transparent',
          }}
        >
          Contact
        </Link>
      </NavLinks>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;