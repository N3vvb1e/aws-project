import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ItemDetails from "./ItemDetails.jsx";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_4JUB7EnkX",
  client_id: "infrojr2vqkgtf14pq1faeuo2",
  redirect_uri: "http://localhost:5173", // https://d2ncf09vbdmii4.cloudfront.net
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById("root")).render(
  <AuthProvider {...cognitoAuthConfig}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  </AuthProvider>
);
