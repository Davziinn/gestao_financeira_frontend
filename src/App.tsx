import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
// import { DefaultLayout } from "./layouts";
import { AppRoutes } from "./routes";


export function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}
