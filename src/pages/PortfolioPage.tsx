import styled from 'styled-components';

const PortfolioContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const PortfolioTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PortfolioCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const PortfolioPage = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>Our Portfolio</PortfolioTitle>
      <PortfolioGrid>
        <PortfolioCard>
          <img src="https://picsum.photos/300/200?random=4" alt="Project 1" />
          <h3>Modern Garden Oasis</h3>
          <p>Natural stone pathways and a stunning water feature.</p>
        </PortfolioCard>
        <PortfolioCard>
          <img src="https://picsum.photos/300/200?random=5" alt="Project 2" />
          <h3>Luxury Outdoor Living</h3>
          <p>A cozy patio with fire pit and elegant lighting design.</p>
        </PortfolioCard>
        <PortfolioCard>
          <img src="https://picsum.photos/300/200?random=6" alt="Project 3" />
          <h3>Eco-Friendly Landscape</h3>
          <p>Sustainable gardens with native and pollinator-friendly plants.</p>
        </PortfolioCard>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default PortfolioPage;