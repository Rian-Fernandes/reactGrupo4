import { useEffect } from "react";
function Company() {
  useEffect(() => {
    document.body.style = "background: #576851";
  }, []);
  return <h1>Company</h1>;
}

export default Company;
