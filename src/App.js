import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Error from './Error/Error';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      
      {/* <Home /> */}
      
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={ <Error /> } /> */}
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
