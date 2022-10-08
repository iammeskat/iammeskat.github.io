
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">

    <Header/>

    <div className="container">
      <Home/>
        <About />
        <Portfolio/>
    </div>
  </main>
  );
}

export default App;
