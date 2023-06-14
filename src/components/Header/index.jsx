import styled from "styled-components";
import { ThemeToggerButton } from "../toggler-theme/index";
import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";

const Header = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <HeaderStyled theme={theme}>
         <LogoPokemon
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="pokemon-logo"
         />
         <ThemeToggerButton> Mudar Tema </ThemeToggerButton>
      </HeaderStyled>
   );
};

export default Header;

const HeaderStyled = styled.header`
   background-color: ${({ theme }) => theme.backgroundColor};
   height: 100px;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

const LogoPokemon = styled.img`
   border-radius: 10px;
   height: 60px;
`;
