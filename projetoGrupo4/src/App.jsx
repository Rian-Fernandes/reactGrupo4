import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Signin from "./pages/signin/index";
import Signup from "./pages/signup/index";
import useAuth from "./hooks/useAuth";
import { AuthProvider } from "./contexts/auth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
