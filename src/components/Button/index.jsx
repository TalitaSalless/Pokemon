import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import { ButtonStyled } from "./style"

export const Button = (props) => {
   const { theme } = useContext(ThemeContext);

   return <ButtonStyled {...props} theme={theme} />;
};


