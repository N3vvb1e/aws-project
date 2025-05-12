// App.js

import { useAuth } from "react-oidc-context";
import Home from "./Home";
import { deleteAccessToken } from "./utils/apis";

function App() {
  const auth = useAuth();

  console.log("auth", auth);

  const signOutRedirect = () => {
    const clientId = "infrojr2vqkgtf14pq1faeuo2";
    const logoutUri = "http://localhost:5173"; // https://d2ncf09vbdmii4.cloudfront.net
    const cognitoDomain =
      "https://us-east-14jub7enkx.auth.us-east-1.amazoncognito.com";
    deleteAccessToken();
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <>
        <button onClick={() => signOutRedirect()}>Sign out</button>
        <Home />
      </>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
    </div>
  );
}

export default App;
