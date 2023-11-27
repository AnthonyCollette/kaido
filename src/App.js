import './assets/scss/main.scss';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './pages/Error404';
import AboutPage from './pages/AboutPage';
import Loading from './components/Loading';
import Products from './pages/Products';

function App(){
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
