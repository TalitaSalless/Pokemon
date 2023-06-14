import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
import { ThemeProvider } from "./context/theme-context";
import { AppRoutes } from "./pages/routes";

function App() {
   const { theme } = useContext(ThemeContext);

   return (
      <ThemeProvider theme={theme}>
         <AppRoutes />
      </ThemeProvider>
   );
}

export default App;
