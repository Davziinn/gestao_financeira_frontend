import { Box, Button, Typography } from "@mui/material";
import { DialogAdicionarCategoria } from "../Dialogs/DialogAdicionarCategoria/DialogAdicionarCategoria";
import { useState } from "react";

export function HeaderCategoria() {
  const [openDialogAdicionar, setOpenDialogAdicionar] = useState(false);

  const handleCloseDialogAdicionar = () => {
    setOpenDialogAdicionar(false);
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
      />
    </Box>
  );
}
