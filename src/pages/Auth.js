import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";

const Auth = () => {
  const { isLoading, loginWithRedirect } = useAuth0();
  return <button onClick={loginWithRedirect}>Login</button>;
};

export default Auth;
