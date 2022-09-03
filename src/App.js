import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { useMutation, useQuery } from "./convex/_generated/react.ts";

function App() {
  const [userId, setUserId] = useState(null);
  const storeUser = useMutation("storeUser");
  const addChannel = useMutation("addChannel");
  useEffect(() => {
    // Store the user in the database.
    // Recall that `storeUser` gets the user information via the `auth`
    // object on the server. You don't need to pass anything manually here.
    async function createUser() {
      const id = await storeUser();
      setUserId(id);
    }
    createUser();
    return () => setUserId(null);
  }, [storeUser]);
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes></Routes>
    </div>
  );
}

export default App;
