/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";

export interface Categoria {
  id: string;
  nome: string;
  tipo: 'entrada' | 'saida'
}

interface CategoriaContextProps {
  categorias: Categoria[];
  adicionarCategoria: (categoria: Omit<Categoria, "id">) => void;
}

export const CategoriaContext = createContext<
  CategoriaContextProps | undefined
>(undefined);

export const CategoriaProvider = ({ children }: { children: ReactNode }) => {
  const [categorias, setCategorias] = useState<Categoria[]>([
    { id: "1", nome: "Salário", tipo: 'entrada' },
    { id: "2", nome: "Alimentação", tipo: 'saida' },
  ]);

   const adicionarCategoria = (categoria: Omit<Categoria, "id">) => {
    const novaCategoria = {
      id: crypto.randomUUID(),
      ...categoria,
    };
    setCategorias((prev) => [novaCategoria, ...prev]);
  };

  return (
    <CategoriaContext.Provider value={{ categorias, adicionarCategoria }}>
      {children}
    </CategoriaContext.Provider>
  );
};
