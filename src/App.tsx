import React from "react";
import Header from "./components/Header";
import LevelCard from "./components/LevelCard";
function App() {
  console.log(process.env);
  return (
    <>
      <Header />
      <LevelCard
        level={1}
        imgSrc="https://firebasestorage.googleapis.com/v0/b/where-s-waldo-top.appspot.com/o/level-1.jpg?alt=media&token=277a291f-1e05-4378-9822-4a2851f51d7c"
        characters="Waldo"
      />
    </>
  );
}

export default App;
