import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Company from "./components/Pages/Company";
import NewProject from "./components/Pages/NewProject";
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from "./components/layout/Container";
import Projects from "./components/Pages/Projects";


function App() {
  return (
    <Router>
      <Navbar/>
        <Container customClass = "min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
        </Container>
        <Footer/>

    </Router>
  );
}

export default App;
