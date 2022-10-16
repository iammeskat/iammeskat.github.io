import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
function App() {
  const [color, setColor] = useState('green');
  import (`./assets/css/themes/${color}.css`);
  const changeColor = (id) => {
    switch (id) {
    case 0:
      setColor('green');
      break;
    case 1:
      setColor('crimson');
      break;
    case 2:
      setColor('blue');
      break;
    case 3:
      setColor('yellow');
      break;
    case 4:
      setColor('purple');
      break;
    case 5:
      setColor('fuchsia');
      break;
    case 6:
      setColor('pink');
      break;
    case 7:
      setColor('sky');
      break;
    case 8:
      setColor('teal');
      break;
  
    default:
      setColor('green');
      break;
  }
  }


  
  return (
    <>
      <Header setColor={changeColor} />
      <main>
        {/* <div className=""></div> */}
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
