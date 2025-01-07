import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [authentication, setAuthentication] = useState("none");

  return (
    <>
      <Header authentication={authentication} />
      <Outlet context={[authentication, setAuthentication]} />

      <Footer />
    </>
  );
}

export default App;
