
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About />
        <Portfolio />
        <Contact/>
      </main>
    </>
  );
}

export default App;
