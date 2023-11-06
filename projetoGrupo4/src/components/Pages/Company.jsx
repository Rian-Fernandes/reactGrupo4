import { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
function Company() {
  useEffect(() => {
    document.body.style = "background: #576851";
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <h1>Company</h1>
      </section>
      <Footer />
    </>
  );
}

export default Company;
