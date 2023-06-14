import styled from "styled-components";
import { useEffect, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";
import Header from "../components/Header/index";
import { PokemonDetails } from "./PokemonDetails";
import { getPokemonList } from "../services/api";

let offset = 0;

export const Pokedex = () => {
   const { theme } = useContext(ThemeContext);

   const [pokemonCard, setPokemonCard] = useState({
      pokemons: [],
   });
   const [selectedPokemon, setSelectedPokemon] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const pokemonList = await getPokemonList(
            "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0"
         );

         const promises = pokemonList.results.map(async (item) => {
            const pokemonUrl = item.url;
            const pokemonResponse = await fetch(pokemonUrl);
            const pokemonData = await pokemonResponse.json();
            return pokemonData;
         });
         const pokemonsData = await Promise.all(promises);

         setPokemonCard({
            pokemons: pokemonsData,
         });
      };

      fetchData();
   }, []);

   const handleLoadMore = async () => {
      offset += 10;

      const pokemonListResponse = await fetch(
         `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
      );
      const pokemonListData = await pokemonListResponse.json();

      const promises = pokemonListData.results.map(async (item) => {
         const pokemonUrl = item.url;
         const pokemonResponse = await fetch(pokemonUrl);
         const pokemonData = await pokemonResponse.json();
         return pokemonData;
      });
      const newPokemonsData = await Promise.all(promises);

      setPokemonCard({
         pokemons: [...pokemonCard.pokemons, ...newPokemonsData],
      });
   };

   return (
      <>
         <Header />
         <PokedexStyled>
            <Cards>
               {pokemonCard.pokemons.map((pokemon, index) => (
                     <Card key={index} onClick={() => setSelectedPokemon(pokemon)}>
                        <PokemonCard pokemon={pokemon} theme={theme}>
                           <ImagemPokemon
                              src={pokemon.sprites.front_default}
                              alt={pokemon.name}
                           />
                           <NomePokemon>{pokemon.name}</NomePokemon>
                        </PokemonCard>
                  </Card>
               ))}
            </Cards>

            <LoadMorePokemons>
               <ButtonLoadMore onClick={handleLoadMore}>
                  {" "}
                  Carregar Mais{" "}
               </ButtonLoadMore>
            </LoadMorePokemons>

            {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
         </PokedexStyled>
      </>
   );
};

const PokedexStyled = styled.main`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
`;
const Cards = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   width: 90%;
   min-height: 80vh;
   margin: 20px;
   padding: 30px;
   gap: 40px;
`;

const Card = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 200px;
   height: 250px;
   border: none;
`;

export const LoadMorePokemons = styled.div`
   height: 100px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
`;

const ButtonLoadMore = styled.button`
   margin-top: -80px;
   border: none;
   display: flex;
   padding: 13px;
   border-radius: 10px;
   font-weight: bold;
   font-size: 16px;
   cursor: pointer;
   transition: 0.1s;

   &:hover {
      box-shadow: 0 0 10px #0aa8e6, 0 0 40px #0aa8e6, 0 0 70px #0aa8e6;
   }
`;

const PokemonCard = styled.ul`
   border: 2px solid #363636;
   cursor: pointer;
   height: 100%;
   width: 100%;
   border-radius: 10px;
   color: ${({ theme }) => theme.textColor};
   background-color: ${({ theme }) => theme.backgroundColor};
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const ImagemPokemon = styled.img`
   padding: 10px 0 0 0;
   width: 180px;
   margin-bottom: -20px;
`;

const NomePokemon = styled.h3`
   letter-spacing: 3px;
   font-size: 20px;
   font-family: "Pokemon";
   font-weight: 100;
`;
