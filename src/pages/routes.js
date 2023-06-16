import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokedex } from "./Pokedex";
import { PokemonDetails } from "./PokemonDetails";

const AppRoutes = (props) => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Pokedex />} />
            <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
         </Routes>
      </BrowserRouter>
   );
};

export { AppRoutes };
