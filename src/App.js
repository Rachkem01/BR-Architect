import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Design from './Design/Design';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return <>
  {/* <Router>
  <Nav />
  <Home />
    <Routes>
  
  

  <Route path ="/Projects" element={  <Projects />}>

  </Route>

  <Route path ="/About" element={<About />}>
  
  </Route>
  <Route path ="/Contact" element={<Contact />}>
  
  </Route>

  </Routes>
  <Design />
  </Router> */}

  <Nav />
  <Home />
  <Projects/>
  <About/>
  <Contact />
  <Design />
  </>
    

}

export default App;
