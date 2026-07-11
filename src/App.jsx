import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import Quality from './pages/Quality';
import ExportProcess from './pages/ExportProcess';
import GlobalMarkets from './pages/GlobalMarkets';
import Industries from './pages/Industries';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/export-process" element={<ExportProcess />} />
            <Route path="/global-markets" element={<GlobalMarkets />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
