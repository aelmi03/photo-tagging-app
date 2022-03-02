import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import { query, collection, getFirestore, getDocs } from "firebase/firestore";
import { ILevel } from "../types";
import { useEffect, useState } from "react";
const Main = () => {
  const [levels, setLevels] = useState<ILevel[] | null>();
  const loadLevels = async () => {
    const levelsQuery = query(collection(getFirestore(), "levels"));

    const loadedLevels = await getDocs(levelsQuery);
    setLevels(loadedLevels.docs.map((doc) => doc.data() as ILevel));
  };
  useEffect(() => {
    loadLevels();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
              <Home levels={levels} />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
};

export default Main;
