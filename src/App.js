import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
// import {BrowserRouter as Router,Routes,Route} from 'reac-router-dom';
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />

      {/* <Router>
          <Routes>
            <Route path="/" />
          </Routes>
      </Router> */}
    </>
  );
}

export default App;
