import { useContext } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Role from './components/Role/Role';
import { ThemeContext } from './contexts/theme';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [{themeName}] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header/>
      <main>
       <About/>
       <Role/>
       <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
