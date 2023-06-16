import {
   HeaderPokemon,
   PokemonId,
   PokemonHp,
   Header,
   BackButton,
   BackButtonImage,
   PokemonDetailsContainer,
   PokemonCard,
   PokemonImage,
   PokemonName,
   PokemonInfoList,
   IdPokemon,
   Informations,
   PokemonType,
   Type,
   PokemonStats,
   PokemonCardMove,
   PokemonCardAbility,
   PokemonInfoAbility,
   TypeName,
} from "./style";

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import buttonImage from "../../assets/button-image.png";
import { ThemeToggerButton } from "../toggler-theme/index"
import { ThemeContext } from "../../context/theme-context";

const typeColors = {
   normal: "#A8A77A",
   fire: "#EE8130",
   water: "#6390F0",
   electric: "#F7D02C",
   grass: "#7AC74C",
   ice: "#96D9D6",
   fighting: "#C22E28",
   poison: "#A33EA1",
   ground: "#E2BF65",
   flying: "#A98FF3",
   psychic: "#F95587",
   bug: "#A6B91A",
   rock: "#B6A136",
   ghost: "#735797",
   dragon: "#6F35FC",
   dark: "#705746",
   steel: "#B7B7CE",
   fairy: "#D685AD",
};

export const PokeCard = () => {
   const { theme } = useContext(ThemeContext);

   const [pokemon, setPokemon] = useState({});
   const [types, setTypes] = useState([]);
   const [moves, setMoves] = useState([]);
   const [abilities, setAbilities] = useState([]);

   const { id } = useParams();
   const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data: pokemonData } = await axios.get(pokemonUrl);

            const formattedPokemon = {
               name: pokemonData.name,
               image: pokemonData.sprites?.other.dream_world.front_default,
               id: pokemonData.id,
               hp: pokemonData.stats[0].base_stat,
               attack: pokemonData.stats[1].base_stat,
               defense: pokemonData.stats[2].base_stat,
               speed: pokemonData.stats[5].base_stat,
            };
            const types = pokemonData.types?.map(({ type }) => type.name) || [];
            const moves = pokemonData.moves?.map(({ move }) => move.name) || [];
            const abilities =
               pokemonData.abilities?.map(({ ability }) => ability.url) || [];

            const abilityDataPromises = abilities.map(async (abilityUrl) => {
               const { data: abilityData } = await axios.get(abilityUrl);

               const filteredAbilityDescription =
                  abilityData.effect_entries?.filter(
                     (description) => description.language.name === "en"
                  ) || [];

               return {
                  name: abilityData.name,
                  description: filteredAbilityDescription[0]?.effect || "",
               };
            });

            const abilityData = await Promise.all(abilityDataPromises);

            setPokemon(formattedPokemon);
            setTypes(types);
            setMoves(moves);
            setAbilities(abilityData);
         } catch (error) {
            console.error("Error fetching Pokemon data:", error);
         }
      };

      fetchData();
   }, [id, pokemonUrl]);

   return (
      <>
         <Header>
            <Link to="/">
               <BackButton>
                  <BackButtonImage src={buttonImage} alt="Back" />
               </BackButton>
            </Link>

            <ThemeToggerButton> Mudar Tema </ThemeToggerButton>
         </Header>

         <PokemonDetailsContainer>
            <PokemonCard theme={theme}>
               <HeaderPokemon>
                  <PokemonHp>
                     <b>HP</b> {pokemon.hp}
                  </PokemonHp>
                  <PokemonId># {pokemon.id}</PokemonId>
               </HeaderPokemon>

               <IdPokemon>
                  <PokemonName>{pokemon.name}</PokemonName>
                  <PokemonImage src={pokemon.image} alt={pokemon.name} />

                  <PokemonType>
                     {types.map((type) => (
                        <Type key={type} backgroundColor={typeColors[type]}>
                           <TypeName>{type}</TypeName>
                        </Type>
                     ))}
                  </PokemonType>

                  <PokemonStats>
                     <div>
                        <p>{pokemon.attack}</p>
                        <span>Attack</span>
                     </div>
                     <div>
                        <p>{pokemon.defense}</p>
                        <span>Defense</span>
                     </div>
                     <div>
                        <p>{pokemon.speed}</p>
                        <span>Speed</span>
                     </div>
                  </PokemonStats>
               </IdPokemon>

               <Informations>
                  <PokemonCardMove>
                     <p>Moves</p>
                     <PokemonInfoList>
                        {moves.slice(0, 5).map((move) => (
                           <li key={move}>
                              <p>{move}</p>
                           </li>
                        ))}
                     </PokemonInfoList>
                  </PokemonCardMove>

                  <PokemonCardAbility>
                     <p>Abilities</p>
                     <PokemonInfoAbility>
                        {abilities.map(({ name, description }) => (
                           <li key={name}>
                              <p>{name}</p>
                              <span>{description}</span>
                           </li>
                        ))}
                     </PokemonInfoAbility>
                  </PokemonCardAbility>
               </Informations>
            </PokemonCard>
         </PokemonDetailsContainer>
      </>
   );
};
