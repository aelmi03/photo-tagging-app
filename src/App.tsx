import React from "react";
import Header from "./components/Header";
import Levels from "./components/Home/Levels";
function App() {
  console.log(process.env);
  return (
    <>
      <Header />
      <Levels />
    </>
  );
}

export default App;
