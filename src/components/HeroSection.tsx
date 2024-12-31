import styled from 'styled-components';


const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;
  height: calc(100vh - 4rem); /* Full viewport height minus navbar */
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;
  padding: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.a`
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to Blue Rose Design</HeroTitle>
      <HeroSubtitle>Crafting Elegant Outdoor Spaces</HeroSubtitle>
      <HeroButton href="#portfolio">View Portfolio</HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;