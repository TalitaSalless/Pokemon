import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const PokemonDetails = () => {

   const [pokemon, setPokemon] = useState({});
   const [types, setTypes] = useState([]);
   const [moves, setMoves] = useState([]);
   const [abilities, setAbilities] = useState([]);

   const { id } = useParams();

   const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

   useEffect(() => {
      async function fetchData() {
         const pokemonData = await axios.get(pokemonUrl);

         const pokemon = {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
         };

         const types = pokemonData.types.map((type) => type.type.name);
         const moves = pokemonData.moves.map((move) => move.move.name);

         const abilities = pokemonData.abilities.map(
            (ability) => ability.ability.url
         );

         const abilityDataPromises = await Promise.all(
            abilities.map(async (abilityUrl) => {
               const abilityData = await axios.get(abilityUrl);

               const filteredAbilityDescription =
                  abilityData.effect_entries.filter(
                     (description) => description.language.name === "en"
                  );

               return {
                  name: abilityData.name,
                  description: filteredAbilityDescription[0].effect,
               };
            })
         );

         setPokemon(pokemon);
         setTypes(types);
         setMoves(moves);
         setAbilities(abilityDataPromises);
      }
      fetchData();
   }, [id, pokemonUrl]);

   return (
      <>
         <HeaderDetails>
            <Link to="/">
               <Button>Voltar para a Home</Button>
            </Link>
         </HeaderDetails>

         <PokemonDetailsContainer >
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonImage src={pokemon.image} alt={pokemon.name} />

            <PokemonInfoTitle>Tipo:</PokemonInfoTitle>
            <PokemonInfoList>
               {types.map((type, index) => (
                  <PokemonInfoItem key={index}>{type}</PokemonInfoItem>
               ))}
            </PokemonInfoList>

            <PokemonInfoTitle>Movimentos:</PokemonInfoTitle>
            <PokemonInfoList>
               {moves.map((move, index) => (
                  <PokemonInfoItem key={index}>{move}</PokemonInfoItem>
               ))}
            </PokemonInfoList>

            <PokemonInfoTitle>Habilidades:</PokemonInfoTitle>
            <PokemonInfoList>
               {abilities.map((ability, index) => (
                  <PokemonInfoItem key={index}>{ability.name}</PokemonInfoItem>
               ))}
            </PokemonInfoList>
         </PokemonDetailsContainer>
      </>
   );
};

export const HeaderDetails = styled.header`
   height: 200px;
   background-color: aliceblue;
`;

export const PokemonDetailsContainer = styled.div`
   height: 100%;
   width: 600px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #134979;
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
   height: 500px;
   width: 500px;
   background-color: bisque;
   margin-bottom: 5px;
`;
