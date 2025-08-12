/* eslint-disable react-refresh/only-export-components */
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
import { DialogEditarCategoria } from "../Dialogs/DialogEditarCategoria/DialogEditarCategoria";
import { useState } from "react";

interface Categoria {
  id: string;
  nome: string;
  tipo: "entrada" | "saida";
}

export const TabelaCategoria = () => {
  const [openDialogEditar, setOpenDialogEditar] = useState(false);
  const [categoriaParaEditar, setCategoriaParaEditar] = useState<Categoria | undefined>(undefined);

  // Aqui você só precisa da função `editarCategoria` do contexto
  const { categorias, editarCategoria } = useCategoriaContext();

  const handleOpenDialogEditar = (categoria: Categoria) => {
    setCategoriaParaEditar(categoria);
    setOpenDialogEditar(true);
  };

  const handleCloseDialogEditar = () => {
    setOpenDialogEditar(false);
    setCategoriaParaEditar(undefined); // Boa prática: limpa o estado ao fechar
  };

  // Esta função recebe os novos dados do modal
  const handleConfirmEdit = (nomeAtualizado: string, tipoAtualizado: "entrada" | "saida") => {
    if (categoriaParaEditar) {
      const categoriaAtualizada = {
        id: categoriaParaEditar.id,
        nome: nomeAtualizado,
        tipo: tipoAtualizado,
      };
      editarCategoria(categoriaAtualizada);
      handleCloseDialogEditar();
    }
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
                    <IconButton size="small" aria-label="deletar categoria">
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
        onConfirm={handleConfirmEdit} // Agora passamos a nova função de confirmação
        onCancel={handleCloseDialogEditar}
        categoriaParaEditar={categoriaParaEditar}
      />
    </>
  );
};