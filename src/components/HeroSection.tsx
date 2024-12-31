import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 110vh; /* Full viewport height minus navbar */
  overflow: hidden; /* Ensure video doesn't overflow */
  color: white;
  padding: 1rem;
  background-color: black; /* Fallback background */
`;

const VideoBackground = styled(motion.video)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const HeroSubtitle = styled.div`
  position: absolute;
  text-transform: uppercase;
  top: 35%;
  z-index: 2;
  font-size: 2.75rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const HighlightedText = styled(motion.span)<{ color?: string }>`
  color: ${({ color, theme }) => color || theme.colors.secondary};
  font-weight: bold;
  transition: color 0.3s ease-in-out;
`;

const HeroButton = styled(motion.a)`
  position: absolute;
  top: 65%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  opacity: 1;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Animation Variants
const videoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 4.6 },
  },
  grow: {
    scale: [1, 1.1, 1],
    transition: { duration: 0.7, delay: 5.0 },
  },
};

const HeroSection = () => {
  const [qualityText, setQualityText] = useState('');
  const [setInStoneText, setSetInStoneText] = useState('');
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  const fullQualityText = 'Quality...';
  const fullSetInStoneText = 'Set in Stone.';
  const [setInStoneVisible, setSetInStoneVisible] = useState(false);

  // Subtitle Part 1: "Quality..."
  useEffect(() => {
    if (!subtitleVisible) return;
    let timeout: ReturnType<typeof setTimeout>;
    if (qualityText.length < fullQualityText.length) {
      timeout = setTimeout(() => {
        setQualityText(fullQualityText.slice(0, qualityText.length + 1));
      }, 70);
    }
    return () => clearTimeout(timeout);
  }, [qualityText, fullQualityText, subtitleVisible]);

  // Subtitle Part 2: "Set in Stone."
  useEffect(() => {
    if (!setInStoneVisible) return;
    if (qualityText.length < fullQualityText.length) return;
    let timeout: ReturnType<typeof setTimeout>;
    if (setInStoneText.length < fullSetInStoneText.length) {
      timeout = setTimeout(() => {
        setSetInStoneText(
          fullSetInStoneText.slice(0, setInStoneText.length + 1)
        );
      }, 110);
    }
    return () => clearTimeout(timeout);
  }, [
    setInStoneText,
    fullSetInStoneText,
    qualityText,
    fullQualityText,
    setInStoneVisible,
  ]);

  // Delay Subtitle Visibility After Title Animation
  useEffect(() => {
    const delay = setTimeout(() => setSubtitleVisible(true), 1500); // Delay for title animation
    return () => clearTimeout(delay);
  }, []);

  // Delay "Set in Stone" Visibility 2s After Quality Text is Fully Visible
  useEffect(() => {
    if (fullQualityText.length === qualityText.length) {
      const delay = setTimeout(() => setSetInStoneVisible(true), 900);
      return () => clearTimeout(delay);
    }
  }, [qualityText, fullQualityText]);

  return (
    <HeroContainer>
      {/* Video Background */}
      <VideoBackground
        autoPlay
        loop
        muted
        playsInline
        initial="hidden"
        animate="visible"
        variants={videoVariants}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      {/* Content */}
      <HeroSubtitle>
        <motion.span>{qualityText}</motion.span>
        <HighlightedText color="red">
          &nbsp;{setInStoneText}
        </HighlightedText>
      </HeroSubtitle>

      <HeroButton
        href="#portfolio"
        initial="hidden"
        animate={["visible", "grow"]}
        variants={buttonVariants}
      >
        View Portfolio
      </HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;