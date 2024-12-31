import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  max-width: 100%;
  overflow-x: hidden;
`;

const ServicesTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  
`;

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Our Services</ServicesTitle>
      <ServicesGrid>
        <ServiceCard>
          <h3>Landscape Design</h3>
          <p>Transform your outdoor space with creative and personalized designs.</p>
          <a href="#landscape-design">Learn More</a>
        </ServiceCard>
        <ServiceCard>
          <h3>Garden Planning</h3>
          <p>Bring beauty and harmony to your property with expert garden planning.</p>
          <a href="#garden-planning">Learn More</a>
        </ServiceCard>
        <ServiceCard>
          <h3>Lighting Design</h3>
          <p>Illuminate your landscape with functional and aesthetic lighting solutions.</p>
          <a href="#lighting-design">Learn More</a>
        </ServiceCard>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default ServicesSection;