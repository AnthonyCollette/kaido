import './assets/scss/main.scss';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { Routes, Route, HashRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Error404 from './pages/Error404';
import AboutPage from './pages/AboutPage';
import Products from './pages/Products';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MentionsLegales from './pages/MentionsLegales';
import { useTranslation } from 'react-i18next'
import CookieConsent from 'react-cookie-consent';

function App() {

  const { t } = useTranslation()
  
  return (
    <div className="App">
      <HashRouter>
        <CookieConsent
         buttonText={t('Cookies.button')} buttonStyle={{backgroundColor: "#F2D6BD", border: "none"}}>
          {t('Cookies.text')}
        </CookieConsent>
        <ScrollToTop />
        <Helmet>
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
      </HashRouter>
    </div>
  );
}

export default App;
