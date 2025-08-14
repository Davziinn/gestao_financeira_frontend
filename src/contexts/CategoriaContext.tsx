/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";

export interface Categoria {
  id: string;
  nome: string;
  tipo: "entrada" | "saida";
}

interface CategoriaContextProps {
  categorias: Categoria[];
  adicionarCategoria: (categoria: Omit<Categoria, "id">) => void;
  editarCategoria: (categoriaEditada: Categoria) => void;
  deletarCategoria: (id: string) => void;
}

export const CategoriaContext = createContext<
  CategoriaContextProps | undefined
>(undefined);

export const CategoriaProvider = ({ children }: { children: ReactNode }) => {
  const [categorias, setCategorias] = useState<Categoria[]>([
    { id: "1", nome: "Salário", tipo: "entrada" },
    { id: "2", nome: "Alimentação", tipo: "saida" },
  ]);

  const adicionarCategoria = (categoria: Omit<Categoria, "id">) => {
    const novaCategoria = {
      id: crypto.randomUUID(),
      ...categoria,
    };
    setCategorias((prev) => [novaCategoria, ...prev]);
  };

  const editarCategoria = (categoriaEditada: Categoria) => {
    setCategorias((prevCategorias) =>
      prevCategorias.map((categoria) =>
        categoria.id === categoriaEditada.id ? categoriaEditada : categoria
      )
    );
  };

  const deletarCategoria = (id: string) => {
    setCategorias((prev) => prev.filter((c) => c.id != id));
  };

  return (
    <CategoriaContext.Provider
      value={{ categorias, adicionarCategoria, editarCategoria, deletarCategoria }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};
