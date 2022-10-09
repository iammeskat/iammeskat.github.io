
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">

    <Header/>

    <div className="container mx-auto space-y-12 md:space-y-20 py-12 md:py-20">
      <Home/>
      <About />
      <Portfolio />
      <Contact/>
    </div>
  </main>
  );
}

export default App;
