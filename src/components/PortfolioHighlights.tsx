import styled from 'styled-components';

const PortfolioContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const PortfolioTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
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
    display: block;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const PortfolioHighlights = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>Portfolio Highlights</PortfolioTitle>
      <PortfolioGrid>
        <PortfolioCard>
          <img src="https://picsum.photos/300/200?random=1" alt="Project 1" />
          <h3>Modern Garden Oasis</h3>
          <p>A tranquil garden with natural stone pathways and water features.</p>
        </PortfolioCard>
        <PortfolioCard>
          <img src="https://picsum.photos/300/200?random=2" alt="Project 2" />
          <h3>Luxury Outdoor Living</h3>
          <p>An elegant patio with a fire pit and custom lighting design.</p>
        </PortfolioCard>
        <PortfolioCard>
          <img src="https://picsum.photos/300/200?random=3" alt="Project 3" />
          <h3>Eco-Friendly Landscape</h3>
          <p>A sustainable landscape featuring native plants and pollinator gardens.</p>
        </PortfolioCard>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default PortfolioHighlights;