import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => {
  console.log("teste");
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
