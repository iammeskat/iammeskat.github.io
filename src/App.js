import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { countTraffic } from './service/countTraffic';
import { initMixpanel, track } from './service/mixpanel';
function App() {
  initMixpanel()
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(isDarkMode)

  useEffect(() => {
    track("homePage");
    countTraffic();
  },[]);
  
  
  
  return (
    <div className={`${darkMode?'dark': ''}`}>
      <div className="app">
        <Header isDark={darkMode} setDarkMode = {()=>setDarkMode(!darkMode)} />
        <main>
          <Home/>
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer/>
        </div>
      </div>
  );
}

export default App;
