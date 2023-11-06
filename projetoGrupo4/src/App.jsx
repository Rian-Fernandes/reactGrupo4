import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Company from "./components/Pages/Company";
import NewProject from "./components/Pages/NewProject";
import Container from "./components/layout/Container";
import Projects from "./components/Pages/Projects";
import Project from "./components/Pages/Project";
import "./App.css";
import Signin from "./components/Pages/signin/index";
import Signup from "./components/Pages/signup/index";
import useAuth from "./hooks/useAuth";
import { AuthProvider } from "./contexts/auth";
import PropTypes from "prop-types";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};
const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Private Item={Home} />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};
Private.propTypes = {
  Item: PropTypes.elementType.isRequired,
};

export default App;
