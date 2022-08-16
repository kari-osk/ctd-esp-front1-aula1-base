import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import { FormContextProvider } from "./context/contextoFormulario";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route
            path="/formularioEntrada"
            element={
              <FormContextProvider>
                <Formulario />
              </FormContextProvider>
            }
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
