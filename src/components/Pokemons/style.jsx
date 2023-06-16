import styled from "styled-components";

export const PokedexStyled = styled.main`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
`;
export const Cards = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   width: 90%;
   min-height: 80vh;
   margin: 20px;
   padding: 30px;
   gap: 40px;
`;

export const Card = styled.div`
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

export const ButtonLoadMore = styled.button`
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

export const PokemonCard = styled.ul`
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

export const ImagemPokemon = styled.img`
   height: 100px;
   width: 200px;
   padding-top: 30px;
`;

export const NomePokemon = styled.h3`
   letter-spacing: 3px;
   font-size: 20px;
   font-family: "Pokemon";
   font-weight: 100;
   text-decoration: none;
`;