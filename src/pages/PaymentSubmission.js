import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./PaymentSubmission.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51Le1cWBAVDHj1cyq9Y87ki6G58ueD9lCpdnMMu7hS8LiQjLuQYbXgsiCiSW2nA7ZOhhMPA6RDrccv9piBpnZ0yZu00N2rnvAYH");

export default function PaymentSubmission() {
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

      if(location.state == null){
        navigate('/subscriptionTiers')
      }
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      alignItems: 'center', 
      alignContent: 'center', 
      justifyContent: 'center'
      // See all possible variables below
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App" >
      <h1>
        Payment Submission Page
      </h1>      
      {location.state && location.state.option? (
        <div>
        <h3>
          You selected:  {location.state.option}
        </h3>
        <h3>   </h3>
        <h3>
          You will be recieving the following amount of completely customized outfits:  {location.state.amount}
        </h3>
        </div>
        )
      : 
      (<h2>error occurred</h2>)}
      {clientSecret && (
        <div style={{
          paddingLeft: 475}}> 
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        </div>
      )}
    </div>
  );
}
