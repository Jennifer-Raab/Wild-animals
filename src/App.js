import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "./Components/client";
import "./App.css";

import Animals from "./Components/Animals";
import Animal from "./Components/Animal";

export default function App() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => setAnimals(response.items))
      .catch(console.error);
  }, []);

  console.log("Animals in App", animals);

  return (
    <>
      <header className="pad5vh">
        <NavLink to="/">Übersicht</NavLink>
      </header>
      <main className="pad5vh">
        <Routes>
          <Route path="/" element={<Animals animals={animals} />} />
          <Route path="animal/:id" element={<Animal animals={animals} />} />
        </Routes>
      </main>
      <footer className="pad5vh">Test</footer>
    </>
  );
}
