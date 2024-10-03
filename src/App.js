import Card from './Components/Card';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import About from './Components/About';
import Inno from './Components/Inno'
import President from './Components/President'
import Event_sec from './Components/Event_sec'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <President />
      <Event_sec/>
      <Inno/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
