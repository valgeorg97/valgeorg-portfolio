import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
