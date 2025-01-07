import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ authentication }) {
  console.log(authentication);
  return authentication === "guest" ? ( // are you a guest?
    <div className="header">
      <h1 className="title"> Hermes40</h1>
    </div>
  ) : (
    <div className="header">
      <h1 className="title"> Hermes40</h1>
      <Link to="login">Log-In</Link>
      <button>Post Job</button>
    </div>
  );
}
