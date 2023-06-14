import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import styled from "styled-components";

export const Button = (props) => {
   const { theme } = useContext(ThemeContext);

   return <ButtonStyled {...props} theme={theme} />;
};

const ButtonStyled = styled.button`
   display: flex;
   padding: 10px;
   border-radius: 10px;
   font-weight: bold;
   font-size: 16px;
   border: 1px solid ${({ theme }) => theme.textColor};
   color: ${({ theme }) => theme.textColor};
   background-color: ${({ theme }) => theme.backgroundColor};
   cursor: pointer;
`;
