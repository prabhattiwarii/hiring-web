
import './App.css';
import {Route,Routes} from 'react-router-dom';
import About from'./component/About';
import Home from './component/Home';
import Contact from './component/Contact'
import Header1 from './component/header';
import Footer from './component/Footer';
import Privacy from './component/privacy';
import Development from './component/Development';
import Offer from './component/Offer';
import Clinents from './component/Clinents';
import Business from './component/Business';

function App() {
  return (
    <div className="App">
          <Header1/>
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/business" element={<Business />} />
            <Route path="/development" element={<Development />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/About" element={<About />} />
            <Route path="/Clients" element={<Clinents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
