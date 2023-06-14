import { useContext } from "react";
import { ThemeContext, themes } from "../../context/theme-context";
import { Button } from "../Button/index";

export const ThemeToggerButton = () => {
   const { theme, setTheme } = useContext(ThemeContext);

   return (
      <Button
         theme={theme}
         onClick={() =>
            setTheme(theme === themes.light ? themes.dark : themes.light)
         }
      >
         Mudar tema
      </Button>
   );
};
