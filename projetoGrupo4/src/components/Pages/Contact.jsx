import { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
function Contact() {
  useEffect(() => {
    document.body.style = "background: #576851";
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <h1>Contact</h1>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
