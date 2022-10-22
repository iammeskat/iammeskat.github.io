import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
function App() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(isDarkMode);
  
  return (
    <div className='darkm'>
      <Header />
      <h2 className='text-3xl dark:text-green-500'>Test dark mode</h2>
      <main>
        <Home/>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
