// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import Marketing from './pages/Marketing';
import ScrollToTop from './components/ScrollToTop';
import MarketingFunnel from './pages/MarketingFunnel';
import WebFunnel from './pages/WebFunnel';
// import NextSteps from './pages/NextSteps';
// import FacebookPixel from './components/FacebookPixel';
// import GoogleAnalytics from './components/GoogleAnalytics';

const App = () => {
  const isMarketingSubdomain =
    window.location.hostname === 'marketing.digitalya.com.ar' || window.location.hostname.startsWith('marketing.');

  const isWebSubdomain =
    window.location.hostname === 'web.digitalya.com.ar' || window.location.hostname.startsWith('web.');

  return (
    <>
      <ScrollToTop />
      {isMarketingSubdomain ? (
        <Routes>
          <Route path="*" element={<MarketingFunnel />} />
        </Routes>
      ) : isWebSubdomain ? (
        <Routes>
          <Route path="*" element={<WebFunnel />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desarrollo-web" element={<WebDevelopment />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/mkt" element={<MarketingFunnel />} />
          <Route path="/web" element={<WebFunnel />} />
          {/* <Route path="/nextsteps" element={<NextSteps />} /> */}
        </Routes>
      )}
    </>
  );
};

export default App;
