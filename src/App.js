import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { useMutation, useQuery } from "./convex/_generated/react.ts";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [userId, setUserId] = useState(null);
  const storeUser = useMutation("storeUser");
  const addChannel = useMutation("addChannel");
  const { logout, user } = useAuth0();
  useEffect(() => {
    // Store the user in the database.
    // Recall that `storeUser` gets the user information via the `auth`
    // object on the server. You don't need to pass anything manually here.
    async function createUser() {
      const id = await storeUser();
      console.log("storing user")
      setUserId(id);
    }
    createUser();
    return () => setUserId(null);
  }, [storeUser]);
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
      <Routes></Routes>
    </div>
  );
}

export default App;
