import styled from 'styled-components';

const ProcessContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const ProcessTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProcessCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
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

const DesignProcessPage = () => {
  return (
    <ProcessContainer>
      <ProcessTitle>Our Design Process</ProcessTitle>
      <p>
        Discover how we bring your vision to life through a step-by-step
        process that ensures stunning results.
      </p>
      <ProcessGrid>
        <ProcessCard>
          <img src="https://picsum.photos/100/100?random=1" alt="Consultation" />
          <h3>Consultation</h3>
          <p>We start with a detailed discussion to understand your vision and preferences.</p>
        </ProcessCard>
        <ProcessCard>
          <img src="https://picsum.photos/100/100?random=2" alt="Planning" />
          <h3>Planning</h3>
          <p>Our team crafts a custom design plan tailored to your needs and space.</p>
        </ProcessCard>
        <ProcessCard>
          <img src="https://picsum.photos/100/100?random=3" alt="Implementation" />
          <h3>Implementation</h3>
          <p>We bring the design to life, managing every detail with precision.</p>
        </ProcessCard>
        <ProcessCard>
          <img src="https://picsum.photos/100/100?random=4" alt="Final Touches" />
          <h3>Final Touches</h3>
          <p>We add the finishing touches to ensure every element exceeds expectations.</p>
        </ProcessCard>
      </ProcessGrid>
    </ProcessContainer>
  );
};

export default DesignProcessPage;