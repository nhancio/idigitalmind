import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingChatbot from './components/common/FloatingChatbot';
import FloatingButton from './components/common/FloatingButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import Approach from './pages/Approach';
import Contact from './pages/Contact';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            <Route path="/approach" element={<Approach />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
        <FloatingChatbot />
        <FloatingButton 
          icon="arrow-up" 
          onClick={scrollToTop}
          position="bottom-right"
          className="bottom-20 right-6"
        />
      </div>
    </Router>
  );
}

export default App;