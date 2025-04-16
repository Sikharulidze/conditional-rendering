import React from "react";
import Login from "./Login";
import Input from "./Input";


var isLoggedin = false;

function loginCheck() {
  if (isLoggedin === true) {
    return <h1>Hello</h1>;
  } else {
    return (
      <Login />
    );
  }
}

function App() {
  return <div className="container">{loginCheck()}</div>;
}

export default App;
