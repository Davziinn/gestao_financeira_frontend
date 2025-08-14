import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Fade,
} from "@mui/material";

interface DialogExcluirCategoriaProps {
  id: string;
  open?: boolean;
  nomeCategoria: string;
  onCancel: () => void;
  onConfirm?: () => void;
}

export const DialogExcluirCategoria = ({
  id,
  open = false,
  nomeCategoria,
  onCancel,
  onConfirm,
}: DialogExcluirCategoriaProps) => {
  return (
    <Dialog
      id={id}
      open={open}
      onClose={onCancel}
      maxWidth="sm"
      fullWidth
      scroll="body"
      TransitionComponent={Fade}
      transitionDuration={300}
      PaperProps={{
        sx: {
          bgcolor: "#202024",
          color: "#E1E1E6",
          borderRadius: 3,
          px: 4,
          py: 4,
          maxWidth: "480px",
          maxHeight: "90vh",
          overflowX: "hidden",
          overflowY: "auto",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <DialogTitle>
        Tem certeza que deseja excluir a categoria "{nomeCategoria}"?
      </DialogTitle>

      <DialogActions>
        <Button
          fullWidth
          onClick={onCancel}
          variant="outlined"
          sx={{
            borderColor: "#F75A68",
            color: "#F75A68",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: 2,
            textTransform: "none",
            py: 1.25,
            "&:hover": {
              bgcolor: "rgba(247, 90, 104, 0.08)",
              borderColor: "#f94c5a",
              boxShadow: "0 0 0 1px #f94c5a",
            },
          }}
        >
          Fechar
        </Button>

        <Button
          fullWidth
          variant="contained"
          onClick={onConfirm}
          sx={{
            bgcolor: "#00B37E",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: 2,
            textTransform: "none",
            py: 1.25,
            "&:hover": {
              bgcolor: "#019466",
              boxShadow: "0 0 0 1px #019466",
            },
            "&.Mui-disabled": {
              bgcolor: "#2e2e2e",
              color: "#777",
              cursor: "not-allowed",
            },
          }}
        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};
