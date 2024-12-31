import styled from 'styled-components';

const CTAContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }
`;

const CTASubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.a`
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

const DesignProcessCTA = () => {
  return (
    <CTAContainer>
      <CTATitle>Discover Our Unique Design Process</CTATitle>
      <CTASubtitle>
        Learn how we transform outdoor spaces into stunning landscapes step-by-step.
      </CTASubtitle>
      <CTAButton href="#design-process">Learn More</CTAButton>
    </CTAContainer>
  );
};

export default DesignProcessCTA;