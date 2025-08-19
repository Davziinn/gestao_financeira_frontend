import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  Fade,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  DialogActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";

interface DialogAdicionarCategoriaProps {
  id: string;
  open: boolean;
  onCancel: () => void;
  onConfirm: (nome: string, tipo: "entrada" | "saida") => void;
}

export const DialogAdicionarCategoria = ({
  id,
  open = false,
  onCancel,
  onConfirm,
}: DialogAdicionarCategoriaProps) => {
  const [tipo, setTipo] = useState<"entrada" | "saida">("entrada");
  const [nome, setNome] = useState("");

  const isFormValid = nome.trim() !== "";

  useEffect(() => {
    if (open) {
      setNome("");
      setTipo("entrada");
    }
  }, [open]);

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
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "#fff",
          pb: 1,
          px: 0,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#00B37E",
            borderRadius: 2,
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CategoryIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
        </Box>
        Nova categoria
      </DialogTitle>

      <Typography
        variant="body2"
        sx={{
          color: "#A9A9B2",
          mb: 4,
          lineHeight: 1.5,
        }}
      >
        Crie uma nova categoria para organizar melhor suas transações
      </Typography>

      <DialogContent
        sx={{
          px: 0,
          py: 0,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          overflowX: "hidden",
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#E1E1E6",
              mb: 2,
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Nome da categoria
          </Typography>
          <TextField
            placeholder="Digite o nome da categoria"
            variant="outlined"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            autoFocus
            InputLabelProps={{ shrink: true, style: { color: "#aaa" } }}
            InputProps={{
              sx: {
                color: "#E1E1E6",
                bgcolor: "#121214",
                borderRadius: 2,
                fontSize: "1rem",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4caf50",
                  borderWidth: "2px",
                },
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#E1E1E6",
              mb: 3,
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Tipo da categoria
          </Typography>

          <FormControl>
            <RadioGroup
              row
              value={tipo}
              onChange={(e) => setTipo(e.target.value as "entrada" | "saida")}
            >
              <FormControlLabel
                value="entrada"
                control={
                  <Radio
                    sx={{
                      color: "#4caf50",
                      "&.Mui-checked": { color: "#4caf50" },
                    }}
                  />
                }
                label="Entrada"
              />
              <FormControlLabel
                value="saida"
                control={
                  <Radio
                    sx={{
                      color: "#F75A68",
                      "&.Mui-checked": { color: "#F75A68" },
                    }}
                  />
                }
                label="Saída"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </DialogContent>

      <DialogActions sx={{ mt: 2, px: 0 }}>
        <Button
          onClick={onCancel}
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
          onClick={() => onConfirm(nome, tipo)}
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
          Cadastrar Categoria
        </Button>
      </DialogActions>
    </Dialog>
  );
};
