import styled from "styled-components";

export const HeaderPokemon = styled.div`
   margin-top: 20px;
   width: 90%;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 10px;
   font-size: 18px;
   font-family: "Inter";
   
`;

export const PokemonId = styled.p`
   border-radius: 10px;
   background-color: aliceblue;
   padding: 10px;
`;

export const PokemonHp = styled.p`
   border-radius: 10px;
   background-color: aliceblue;
   padding: 10px;
`;

export const Header = styled.header`
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 300px;
`;

export const BackButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50px;
   height: 50px;
   border-radius: 100%;
   border: none;
   cursor: pointer;
   margin-top: 20px;
   transition: 0.2s;

   &:hover {
      background-color: #0b273f;
   }
`;

export const BackButtonImage = styled.img`
   width: 20px;
   height: 20px;
`;

export const PokemonDetailsContainer = styled.section`
   max-width: 100%;
   max-height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const PokemonCard = styled.div`
   width: 30%;
   border: 11px solid #f0ec24;
   border-radius: 20px;
   display: flex;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.473);
   color: ${({ theme }) => theme.textColor};
   background-color: ${({ theme }) => theme.backgroundColor};
`;

export const PokemonImage = styled.img`
   width: 300px;
   height: 150px;
   margin: -30px 0 20px 0px;
`;

export const PokemonName = styled.h3`
   margin-top: -30px;
   font-size: 30px;
   letter-spacing: 3px;
   font-family: "Pokemon";
   font-weight: 300;
   color: #374151;
`;

export const PokemonInfoList = styled.ul`
   margin: 0;
   padding: 0 10px;
   width: 100%;
   display: flex;
   justify-content: center;
   gap: 10px;
   list-style: none;
   font-size: 16px;
   font-family: "Inter", sans-serif;

   li > p {
      margin-top: -2px;
      font-family: "Inter";
      font-size: 14px;
   }
`;

export const IdPokemon = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   min-width: 40%;
   margin: 20px 0px;
`;

export const Informations = styled.div`
   margin-top: 20px;
   width: 90%;
   display: flex;
   flex-direction: column;

   div > p {
      font-size: 16px;
      font-weight: 700;
      font-family: "Inter";
   }
`;

export const PokemonType = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px 0 10px 0;
`;

export const Type = styled.li`
   letter-spacing: 1px;
   list-style: none;
   padding: 10px;
   margin-left: 10px;
   height: 20px;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const PokemonStats = styled.div`
   margin-top: 30px;
   width: 100%;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 10px;
   font-size: 16px;
   font-family: "Inter";
   text-align: center;

   div > p {
      margin: 0;
      border-radius: 10px;
      background-color: aliceblue;
      padding: 10px;
   }

   div > span {
      font-weight: 700;
   }
`;

export const PokemonCardMove = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   border-bottom: 1px solid black;
`;

export const PokemonCardAbility = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const PokemonInfoAbility = styled.ul`
   margin-top: -30px;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   list-style: none;
   font-size: 16px;
   font-family: "Inter", sans-serif;
   padding: 10px;

   li > p {
      font-size: 14px;
      font-weight: 700;
      width: 90%;
      text-transform: uppercase;
   }

   li > span {
      font-size: 12px;
      margin: 0;
   }
`;

export const TypeName = styled.p`
   font-weight: bolder;
   font-size: 14px;
   font-family: "Inter", sans-serif;
`;