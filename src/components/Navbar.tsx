import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <LogoImage src={logo} alt="Blue Rose Design Logo" />
      </Link>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/design-process">Design Process</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;