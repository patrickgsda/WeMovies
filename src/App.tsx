import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import AppHeader from "./components/AppHeader";
import { globalStyles } from "./styles/global";
import startServer from "./server";
import Providers from "./providers";
globalStyles();
startServer();

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <AppHeader />
        <Router />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
