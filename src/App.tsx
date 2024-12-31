import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioHighlights from './components/PortfolioHighlights';
import DesignProcessCTA from './components/DesignProcessCTA';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import DesignProcessPage from './pages/DesignProcessPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesSection />
                <PortfolioHighlights />
                <DesignProcessCTA />
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
      </Router>
    </ThemeProvider>
  );
}

export default App;