import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
// import { DefaultLayout } from "./layouts";
import { AppRoutes } from "./routes";
import { CategoriaProvider } from "./contexts/CategoriaContext";
import { TransacaoProvider } from "./contexts/TransactionContext";

export function App() {
  return (
    <BrowserRouter>
      <CategoriaProvider>
        <TransacaoProvider>
          <Header />
          <AppRoutes />
        </TransacaoProvider>
      </CategoriaProvider>
    </BrowserRouter>
  );
}
