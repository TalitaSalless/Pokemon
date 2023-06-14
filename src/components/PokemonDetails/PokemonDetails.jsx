import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button } from "../Button";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {

   const [pokemon, setPokemon] = useState([]);

   const { id } = useParams();

   useEffect(() => {
      (async function getPokemon() {
         const pokemons = await axios(
            `https://pokeapi.co/api/v2/pokemon/${id}`
         );
         setPokemon(pokemons.data);
      })();
      
   }, []);

   return (
      <>
         <header>
            <Button>Voltar para a Home</Button>
         </header>

         <PokemonDetailsContainer>
            <PokemonImage
               src={pokemon.sprites.front_default}
               alt={pokemon.name}
            />
            <PokemonName>{pokemon.name}</PokemonName>

            <PokemonInfoTitle>Movimentos:</PokemonInfoTitle>
            <PokemonInfoList>
               {pokemon.moves.slice(0, 5).map((move, index) => (
                  <PokemonInfoItem key={index}>
                     {move.move.name}
                  </PokemonInfoItem>
               ))}
            </PokemonInfoList>

            <PokemonInfoTitle>Habilidades:</PokemonInfoTitle>
            <PokemonInfoList>
               {pokemon.abilities.slice(0, 5).map((ability, index) => (
                  <PokemonInfoItem key={index}>
                     {ability.ability.name}
                  </PokemonInfoItem>
               ))}
            </PokemonInfoList>

            <PokemonInfoTitle>Tipo:</PokemonInfoTitle>
            <PokemonInfoList>
               {pokemon.types.map((type, index) => (
                  <PokemonInfoItem key={index}>
                     {type.type.name}
                  </PokemonInfoItem>
               ))}
            </PokemonInfoList>
         </PokemonDetailsContainer>
      </>
   );
};

export const PokemonDetailsContainer = styled.div`
   height: 100%;
   width: 600px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: aliceblue;
   text-align: center;
`;

export const PokemonImage = styled.img`
   width: 200px;
   height: 200px;
`;

export const PokemonName = styled.h2`
   color: #333;
`;

export const PokemonInfoTitle = styled.h3`
   color: #666;
`;

export const PokemonInfoList = styled.ul`
   list-style: none;
   padding: 0;
`;

export const PokemonInfoItem = styled.li`
   margin-bottom: 5px;
`;
