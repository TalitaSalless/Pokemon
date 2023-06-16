import { getPokemonList } from "./api";

describe("getPokemonList", () => {
   it("should fetch a list of pokemons", async () => {
      const pokemonList = await getPokemonList(
         "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0"
      );
      expect(pokemonList.results).toHaveLength(10);
      expect(pokemonList.results[0].name).toBe("bulbasaur");
   });

   it("should handle errors", async () => {
      // Teste para verificar o comportamento em caso de erro na requisição
      const pokemonList = await getPokemonList(
         "https://pokeapi.co/api/v2/invalid-url"
      );
      expect(pokemonList).toBeNull();
   });
});


// No exemplo acima, usamos a função describe para agrupar os testes relacionados à função getPokemonList. 
// Dentro do describe, usamos a função it para definir casos de teste individuais.