import {
   PokedexStyled,
   Cards,
   Card,
   LoadMorePokemons,
   ButtonLoadMore,
   PokemonCard,
   ImagemPokemon,
   NomePokemon,
} from "./style";
import { useContext, useEffect, useState } from "react";
import Header from "../Header/index";
import { PokeCard } from "../PokeCard/index";
import { getPokemonList } from "../../services/api";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";

let offset = 0;

export const Pokemons = () => {
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
                     <Link to={`/pokemon/${pokemon.id}`}>
                        <PokemonCard pokemon={pokemon} theme={theme}>
                           <ImagemPokemon
                              src={
                                 pokemon.sprites?.other.dream_world
                                    .front_default
                              }
                              alt={pokemon.name}
                           />
                           <NomePokemon>{pokemon.name}</NomePokemon>
                        </PokemonCard>
                     </Link>
                  </Card>
               ))}
            </Cards>

            <LoadMorePokemons>
               <ButtonLoadMore onClick={handleLoadMore}>
                  {" "}
                  Carregar Mais{" "}
               </ButtonLoadMore>
            </LoadMorePokemons>

            {selectedPokemon && selectedPokemon.url && (
               <PokeCard pokemon={selectedPokemon} />
            )}
         </PokedexStyled>
      </>
   );
};
