import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioHighlights from './components/PortfolioHighlights';
import DesignProcessCTA from './components/DesignProcessCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import DesignProcessPage from './pages/DesignProcessPage';
import ContactPage from './pages/ContactPage';

// Styled Components for Layout
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container spans the full viewport height */
`;

const Content = styled.main`
  flex: 1; /* Allows this section to grow and push the footer down */
`;

// Page transition animations
const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const pageTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};

// Section animations
const heroVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const servicesVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } },
};

const portfolioVariants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
};

const processVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' } },
};

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <MainContainer>
          <Navbar />
          <Content>
            <AnimatedRoutes />
          </Content>
          <Footer />
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on navigation
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location} key={location.pathname}>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={heroVariants}
                >
                  <HeroSection />
                </motion.div>
                {/* Services Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={servicesVariants}
                >
                  <ServicesSection />
                </motion.div>
                {/* Portfolio Highlights */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={portfolioVariants}
                >
                  <PortfolioHighlights />
                </motion.div>
                {/* Design Process CTA */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={processVariants}
                >
                  <DesignProcessCTA />
                </motion.div>
                {/* Contact Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={contactVariants}
                >
                  <ContactForm />
                </motion.div>
              </>
            }
          />
          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />
          {/* Services Page */}
          <Route path="/services" element={<ServicesPage />} />
          {/* Portfolio Page */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* Design Process Page */}
          <Route path="/design-process" element={<DesignProcessPage />} />
          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;