import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/";
import { query, collection, getFirestore, getDocs } from "firebase/firestore";
import { ILevel } from "../types";
import { useEffect, useState } from "react";
import Game from "./Game/";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [levels, setLevels] = useState<ILevel[] | null>(null);
  const [currentLevel, setCurrentLevel] = useState<ILevel | null>(null);
  const loadLevels = async () => {
    const levelsQuery = query(collection(getFirestore(), "levels"));
    const levelDocs = await getDocs(levelsQuery);
    const loadedLevels: ILevel[] = levelDocs.docs.map(
      (doc) => doc.data() as ILevel
    );
    setLevels(loadedLevels);
  };
  function changeCurrentLevel(level: ILevel) {
    if (currentLevel === level) return;
    setCurrentLevel(level);
  }
  useEffect(() => {
    loadLevels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
              <Home levels={levels} changeCurrentLevel={changeCurrentLevel} />
            </React.Fragment>
          }
        />
        <Route path="/game" element={<Game currentLevel={currentLevel} />} />
      </Routes>
    </Router>
  );
};

export default Main;
