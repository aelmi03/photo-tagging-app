import React from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
function App() {
  console.log(process.env);
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
