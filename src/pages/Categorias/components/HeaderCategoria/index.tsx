import { Box, Button, Typography } from "@mui/material";
import { DialogAdicionarCategoria } from "../Dialogs/DialogAdicionarCategoria";
import { useState } from "react";
import { useCategoriaContext } from "../../../../hooks/useCategoriaContext";

export function HeaderCategoria() {
  const [openDialogAdicionar, setOpenDialogAdicionar] = useState(false);

  const { adicionarCategoria } = useCategoriaContext();

  const handleCloseDialogAdicionar = () => {
    setOpenDialogAdicionar(false);
  };

  const handleAddCategoria = (nome: string, tipo: "entrada" | "saida") => {
    adicionarCategoria({ nome, tipo });

    handleCloseDialogAdicionar();
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "-20px",
      }}
    >
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Categorias
      </Typography>
      <Button
        variant="contained"
        onClick={() => setOpenDialogAdicionar(true)}
        style={{
          backgroundColor: "#4CAF50",
        }}
      >
        + Nova categoria
      </Button>

      <DialogAdicionarCategoria
        id="adicionar-categoria"
        open={openDialogAdicionar}
        onCancel={handleCloseDialogAdicionar}
        onConfirm={(nome: string, tipo: "entrada" | "saida") =>
          handleAddCategoria(nome, tipo)
        }
      />
    </Box>
  );
}
