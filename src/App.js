import './assets/scss/main.scss';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './pages/Error404';

function App(){
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/kaido" element={<Homepage />} />
          <Route path="/kaido/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
