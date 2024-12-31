import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Blue Rose Design. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;