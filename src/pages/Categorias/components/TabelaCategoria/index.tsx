import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCategoriaContext } from "../../../../hooks/useCategoriaContext";
import { DialogEditarCategoria } from "../Dialogs/DialogEditarCategoria";
import { useState } from "react";
import { DialogExcluirCategoria } from "../Dialogs/DialogExcluirCategoria";

interface Categoria {
  id: string;
  nome: string;
  tipo: "entrada" | "saida";
}

export const TabelaCategoria = () => {
  const [openDialogEditar, setOpenDialogEditar] = useState(false);
  const [openDialogExcluir, setOpenDialogExcluir] = useState(false);

  const [categoriaParaEditar, setCategoriaParaEditar] = useState<
    Categoria | undefined
  >(undefined);
  const [categoriaParaExcluir, setCategoriaParaExcluir] = useState<
    Categoria | undefined
  >(undefined);

  const { categorias, editarCategoria, deletarCategoria } =
    useCategoriaContext();

  const handleOpenDialogEditar = (categoria: Categoria) => {
    setCategoriaParaEditar(categoria);
    setOpenDialogEditar(true);
  };

  const handleCloseDialogs = () => {
    setOpenDialogEditar(false);
    setOpenDialogExcluir(false);
  };

  const handleConfirmEdit = (
    nomeAtualizado: string,
    tipoAtualizado: "entrada" | "saida"
  ) => {
    if (categoriaParaEditar) {
      const categoriaAtualizada = {
        id: categoriaParaEditar.id,
        nome: nomeAtualizado,
        tipo: tipoAtualizado,
      };
      editarCategoria(categoriaAtualizada);
      handleCloseDialogs();
    }
  };

  const handleConfirmDelete = () => {
    if (categoriaParaExcluir) {
      deletarCategoria(categoriaParaExcluir.id);
    }
    handleCloseDialogs()
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#111", borderRadius: 2, marginTop: "16px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Categoria</TableCell>
              <TableCell sx={{ color: "#fff" }}>Tipo</TableCell>
              <TableCell sx={{ color: "#fff" }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.map((categoria, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#fff" }}>{categoria.nome}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: categoria.tipo === "saida" ? "#f44336" : "#4CAF50",
                      fontWeight: 500,
                      textTransform: "capitalize",
                    }}
                  >
                    {categoria.tipo}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      size="small"
                      aria-label="editar categoria"
                      onClick={() => handleOpenDialogEditar(categoria)}
                    >
                      <EditIcon sx={{ color: "#7D7E7F" }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      aria-label="deletar categoria"
                      onClick={() => {
                        setCategoriaParaExcluir(categoria);
                        setOpenDialogExcluir(true);
                      }}
                    >
                      <DeleteIcon sx={{ color: "#7D7E7F" }} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DialogEditarCategoria
        id="editar-categoria"
        open={openDialogEditar}
        onConfirm={handleConfirmEdit}
        onCancel={handleCloseDialogs}
        categoriaParaEditar={categoriaParaEditar}
      />

      <DialogExcluirCategoria
        id="excluir-categoria"
        open={openDialogExcluir}
        onConfirm={handleConfirmDelete}
        onCancel={handleCloseDialogs}
        nomeCategoria={categoriaParaExcluir?.nome || ""}
      />
    </>
  );
};
