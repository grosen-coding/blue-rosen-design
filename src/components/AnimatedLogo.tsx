import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled Components for the Logo Container
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px; /* Adjust height as needed */
  width: 70px;  /* Adjust width as needed */
`;

// Styled SVG Component
const StyledSVG = styled.svg<{ isAnimating: boolean }>`
  width: 100%;
  height: 100%;
  stroke: #357ca2; /* Stroke color for the logo */
  stroke-width: 5;
  fill: none;
  stroke-dasharray: 6000; /* Adjust this value based on your SVG's path length */
  stroke-dashoffset: ${(props) => (props.isAnimating ? '0' : '6000')};
  transition: stroke-dashoffset 2s ease-out;
`;

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LogoContainer>
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 2000"
        isAnimating={isAnimating}
      >
        <path
          d="M 952.500 29.109 C 775.076 38.105, 606.486 93.750, 460.500 191.499 C ..."
        />
      </StyledSVG>
    </LogoContainer>
  );
};

export default AnimatedLogo;