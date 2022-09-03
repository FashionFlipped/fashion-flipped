import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { useMutation, useQuery } from "./convex/_generated/react.ts";
import { useAuth0 } from "@auth0/auth0-react";
import BoxSelection from "./pages/BoxSelection";
import NavBar from "./components/NavBar";
import Preview from "./pages/Preview";
import Profile from "./pages/Profile";
import SubscriptionTiers from "./pages/Subscriptions";
import MonthlyFeedback from "./pages/MonthlyFeedback";

function App() {
  const { logout, user, isAuthenticated, loginWithRedirect } = useAuth0();
  const storeUser = useMutation("storeUser");

  useEffect(() => {
    if (isAuthenticated) {
      storeUser();
    }
  }, [isAuthenticated]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscriptionTiers" element={<SubscriptionTiers />} />
        <Route path="/monthlyFeedback" element={<MonthlyFeedback />} />
        <Route path="/boxSelection" element={<BoxSelection />} />
      </Routes>
    </div>
  );
}

export default App;
