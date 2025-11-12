// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import Marketing from './pages/Marketing';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      {/* 👇 ScrollToTop se monta aquí, dentro del BrowserRouter (viene de main.tsx) */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desarrollo-web" element={<WebDevelopment />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </>
  );
};

export default App;
