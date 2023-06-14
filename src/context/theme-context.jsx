import { createContext, useState } from "react";

export const themes = {
   light: {
      textColor: "#363636",
      backgroundColor: "#ffffff",
   },
   dark: {
      backgroundColor: "#262626",
      textColor: "#a7a6a6",
   },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
   const [theme, setTheme] = useState(themes.light);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {props.children}
      </ThemeContext.Provider>
   );
};
