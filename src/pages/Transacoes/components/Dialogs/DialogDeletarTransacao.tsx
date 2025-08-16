import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";

interface IDialogDeletarTransacaoProps {
  id: string;
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  nometransacao: string;
}

export const DialogDeletarTransacao = ({
  id,
  open = false,
  onCancel,
  nometransacao,
  onConfirm,
}: IDialogDeletarTransacaoProps) => {
  return (
    <Dialog
      id={id}
      open={open}
      onClose={onCancel}
      PaperProps={{
        sx: {
          bgcolor: "#202024",
          color: "#E1E1E6",
          borderRadius: 3,
          px: 5,
          py: 5,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "#fff",
          pb: 1,
        }}
      >
        Deletar transação
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 1,
        }}
      >
        <Typography>
          Tem certeza que deseja deletar a transação de{" "}
          <strong>{nometransacao}</strong>?
        </Typography>

        <DialogActions sx={{ justifyContent: "flex-end", gap: 2 }}>
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
      </DialogContent>
    </Dialog>
  );
};
