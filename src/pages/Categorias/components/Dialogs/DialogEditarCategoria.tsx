/* eslint-disable react-refresh/only-export-components */
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fade,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { useEffect, useState } from "react";

interface DialogEditarCategoriaProps {
  id: string;
  open: boolean;
  onConfirm: (nome: string, tipo: "entrada" | "saida") => void; // <-- Nova prop
  onCancel: () => void;
  categoriaParaEditar?: {
    id: string;
    nome: string;
    tipo: "entrada" | "saida";
  };
}

export const DialogEditarCategoria = ({
  id,
  open = false,
  onCancel,
  onConfirm, // <-- Aceita a nova prop
  categoriaParaEditar,
}: DialogEditarCategoriaProps) => {
  const [tipo, setTipo] = useState<"entrada" | "saida">("entrada");
  const [nome, setNome] = useState("");

  const isFormValid = nome.trim() !== "";

  useEffect(() => {
    if (open && categoriaParaEditar) {
      setNome(categoriaParaEditar.nome);
      setTipo(categoriaParaEditar.tipo);
    } else {
      // Opcional: limpa o formulário se o modal fechar sem salvar
      setNome("");
      setTipo("entrada");
    }
  }, [open, categoriaParaEditar]);

  const handleSalvar = () => {
    onConfirm(nome, tipo); // Chama a prop com os estados locais
    onCancel(); // Fecha o modal
  };

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
        Editar categoria
      </DialogTitle>

      <Typography
        variant="body2"
        sx={{
          color: "#A9A9B2",
          mb: 4,
          lineHeight: 1.5,
        }}
      >
        Edite sua categoria para organizar melhor suas transações
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
            InputLabelProps={{
              sx: { color: "#A9A9B2" },
            }}
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
                  borderColor: "#00B37E",
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
                      color: "#00B37E",
                      "&.Mui-checked": { color: "#00B37E" },
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

      <Box sx={{ display: "flex", gap: 2, mt: 4, pt: 2 }}>
        <Button
          onClick={onCancel}
          variant="outlined"
          fullWidth
          sx={{
            borderColor: "#F75A68",
            color: "#F75A68",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: 2,
            textTransform: "none",
            py: 1.5,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "rgba(247, 90, 104, 0.08)",
              borderColor: "#f94c5a",
              boxShadow: "0 0 0 1px #f94c5a",
              transform: "translateY(-1px)",
            },
          }}
        >
          CANCELAR
        </Button>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSalvar} // Chama a função interna para salvar
          disabled={!isFormValid}
          sx={{
            bgcolor: "#00B37E",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.85rem",
            borderRadius: 2,
            textTransform: "none",
            py: 1.5,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "#019466",
              boxShadow: "0 8px 25px rgba(0, 179, 126, 0.3)",
              transform: "translateY(-1px)",
            },
            "&.Mui-disabled": {
              bgcolor: "#2e2e2e",
              color: "#777",
              cursor: "not-allowed",
            },
          }}
        >
          SALVAR ALTERAÇÕES
        </Button>
      </Box>
    </Dialog>
  );
};
