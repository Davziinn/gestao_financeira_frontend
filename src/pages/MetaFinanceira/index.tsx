import { Box, Typography, Button } from "@mui/material";
import { AlertaProgresso } from "./components/AlertaProgresso";
import { TabelaMetas } from "./components/TabelaMetas";
import { DialogAdicionarMeta } from "./components/Dialogs/DialogAdicionarMeta";
import { useState } from "react";

export function MetaFinanceira() {
  const [openDialogMeta, setOpenDialogMeta] = useState(false);

  return (
    <Box
      p={4}
      sx={{ backgroundColor: "#0e0e0e", minHeight: "100vh", color: "#fff" }}
    >
      <AlertaProgresso />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Metas
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenDialogMeta(true)}
          sx={{ backgroundColor: "#4CAF50", textTransform: "none" }}
        >
          + NOVA META
        </Button>
      </Box>
      <TabelaMetas />

      <DialogAdicionarMeta
        id="adicionar-meta"
        open={openDialogMeta}
        onClose={() => setOpenDialogMeta(false)}
      />
    </Box>
  );
}
