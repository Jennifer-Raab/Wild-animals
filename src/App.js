import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "./Components/client";
import Tierklassenliste from "./Components/Tierklassenliste";
import GattungsListe from "./Components/GattungsListe";
import "./App.css";
import logo from './graphics/tierlexikon-logo.png';
import spendenbutton from './graphics/spenden-button.png';

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
        <div className="header-flex">
          <img src={logo} alt="Tierlexikon" className="logo" />
          <NavLink to="/">Übersicht</NavLink>
          <img src={spendenbutton} alt="Spenden" className="button" />
        </div>
      </header>
      <main className="pad5vh">
        <Routes>
          <Route path="/" element={<Animals animals={animals} />} />
          <Route path="animal/:id" element={<Animal animals={animals} />} />
          <Route
            path="tierklassenliste/:suchwort"
            element={<Tierklassenliste animals={animals} />}
          />
          <Route
            path="gattung/:suchwort"
            element={<GattungsListe animals={animals} />}
          />
        </Routes>
      </main>
      <footer className="pad5vh">Test</footer>
    </>
  );
}
