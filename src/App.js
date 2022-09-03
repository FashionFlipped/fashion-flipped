import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { useMutation, useQuery } from "./convex/_generated/react.ts";
import { useAuth0 } from "@auth0/auth0-react";
import BoxSelection from "./pages/BoxSelection";
import NavBar from "./components/NavBar";
import Preview from "./pages/Preview";

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
      setUserId(id);
    }
    createUser();
    return () => setUserId(null);
  }, [storeUser]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/boxSelection" element={<BoxSelection />} />
      </Routes>
    </div>
  );
}

export default App;
