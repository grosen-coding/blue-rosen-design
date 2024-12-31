import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const AboutText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        At Blue Rose Design, we bring creativity, thoughtfulness, and passion to every
        landscape project. Based in The Blue Mountains, Ontario, we specialize in crafting
        elegant outdoor spaces that harmonize with nature and reflect our clients' unique
        vision. Our mission is to transform outdoor spaces into stunning landscapes that
        inspire and delight.
      </AboutText>
    </AboutContainer>
  );
};

export default AboutPage;