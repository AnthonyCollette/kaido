import './assets/scss/main.scss';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Error404 from './pages/Error404';
import AboutPage from './pages/AboutPage';
import Products from './pages/Products';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MentionsLegales from './pages/MentionsLegales';
import { useTranslation } from 'react-i18next'

function App() {

  const { t } = useTranslation()

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Helmet>
          <meta charSet='utf-8' />
          <title>{t('Site.title')}</title>
          <meta name="description" content={t('Site.desc')} />
        </Helmet>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
