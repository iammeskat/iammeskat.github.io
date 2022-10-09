
import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {

  useEffect( ()=> {
    console.log("changed");
    console.log(window.location.hash)
  }, [window.location.hash])
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}

export default App;
