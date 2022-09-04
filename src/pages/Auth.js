import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Landing from "./Landing";

const Login = () => {
  const { isLoading, loginWithRedirect } = useAuth0();
  return <button onClick={loginWithRedirect}>Login</button>;
};

const Auth = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Auth;
