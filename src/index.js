import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import { ConvexReactClient } from "convex/react";
import convexConfig from "./convex.json";
import clientConfig from "./convex/_generated/clientConfig.ts";
import Auth from "./pages/Auth";

const convex = new ConvexReactClient(clientConfig);
const authInfo = convexConfig.authInfo[0];

ReactDOM.render(
  <BrowserRouter>
    <ConvexProviderWithAuth0
      client={convex}
      authInfo={authInfo}
      loggedOut={<Auth />}
    >
      <App />
    </ConvexProviderWithAuth0>
  </BrowserRouter>,
  document.getElementById("root")
);
