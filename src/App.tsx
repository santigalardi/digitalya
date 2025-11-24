// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import Marketing from './pages/Marketing';
import ScrollToTop from './components/ScrollToTop';
import MarketingFunnel from './pages/MarketingFunnel';

const App = () => {
  // 🟦 Detectar si el usuario está en marketing.digitalya.com.ar
  const isMarketingSubdomain =
    window.location.hostname === 'marketing.digitalya.com.ar' || window.location.hostname.startsWith('marketing.');

  return (
    <>
      <ScrollToTop />

      {/* 🟪 Si está en el subdominio → solo mostrar el Funnel */}
      {isMarketingSubdomain ? (
        <Routes>
          <Route path="*" element={<MarketingFunnel />} />
        </Routes>
      ) : (
        // 🟩 Sitio normal
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desarrollo-web" element={<WebDevelopment />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/mkt" element={<MarketingFunnel />} />
        </Routes>
      )}
    </>
  );
};

export default App;
