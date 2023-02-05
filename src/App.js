import Aos from 'aos';
import { useEffect} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';

function App() {

  useEffect(() => {
    Aos.init();    
  }, [])

  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
