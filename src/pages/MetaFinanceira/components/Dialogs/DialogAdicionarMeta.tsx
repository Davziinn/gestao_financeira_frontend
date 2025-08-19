import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fade,
  Button,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import { useState } from "react";

interface DialogAdicionarMetaProps {
  id: string;
  open?: boolean;
  onClose?: () => void;
}

export const DialogAdicionarMeta = ({
  id,
  open = false,
  onClose,
}: DialogAdicionarMetaProps) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [prazo, setPrazo] = useState("");

  const isFormValid =
    nome.trim() !== "" && valor.trim() !== "" && prazo.trim() !== "";

  return (
    <Dialog
      id={id}
      open={open}
      maxWidth="sm"
      fullWidth
      scroll="body"
      TransitionComponent={Fade}
      transitionDuration={300}
      PaperProps={{
        sx: {
          bgcolor: "#1E1E1E",
          color: "#F5F5F5",
          borderRadius: 3,
          px: 4,
          py: 3,
          maxWidth: "480px",
          maxHeight: "90vh",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "1.3rem",
          fontWeight: 600,
          mb: 1,
        }}
      >
        Nova Meta
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          bgcolor: "transparent",
          px: 0,
        }}
      >
        <TextField
          fullWidth
          label="Nome da Meta"
          placeholder="Ex: Comprar notebook novo"
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          InputLabelProps={{ shrink: true, style: { color: "#aaa" } }}
          InputProps={{
            sx: {
              bgcolor: "#121212",
              borderRadius: 2,
              color: "#fff",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.1)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4caf50",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4caf50",
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Valor da Meta"
          placeholder="0,00"
          type="number"
          variant="outlined"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          InputLabelProps={{ shrink: true, style: { color: "#aaa" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "#aaa" }}>
                <Box sx={{ color: "#E1E1E6", fontWeight: 600 }}>R$</Box>
              </InputAdornment>
            ),
            sx: {
              bgcolor: "#121212",
              borderRadius: 2,
              color: "#fff",
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.1)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4caf50",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4caf50",
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Prazo"
          type="date"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
          InputLabelProps={{ shrink: true, style: { color: "#aaa" } }}
          InputProps={{
            sx: {
              bgcolor: "#121212",
              borderRadius: 2,
              color: "#fff",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.1)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4caf50",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4caf50",
              },
            },
          }}
        />
      </DialogContent>

      <DialogActions sx={{ mt: 2, px: 0 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            borderColor: "#f44336",
            color: "#f44336",
            px: 3,
            "&:hover": {
              bgcolor: "rgba(244,67,54,0.1)",
              borderColor: "#f44336",
            },
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          disabled={!isFormValid}
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            bgcolor: isFormValid ? "#4caf50" : "#2e2e2e",
            color: isFormValid ? "#fff" : "#888",
            px: 3,
            "&:hover": {
              bgcolor: isFormValid ? "#43a047" : "#2e2e2e",
            },
          }}
        >
          Cadastrar Meta
        </Button>
      </DialogActions>
    </Dialog>
  );
};
