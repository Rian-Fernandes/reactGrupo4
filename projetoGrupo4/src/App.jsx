import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company/";
import NewProject from "./components/pages/NewProject/";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
