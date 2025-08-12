import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Checkbox,
  InputAdornment,
  Collapse,
} from "@mui/material";
import { useCategoriaContext } from "../../../../../hooks/useCategoriaContext";

interface IDialogNovaTransacaoProps {
  id: string;
  open?: boolean;
  isFormValid: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  onValidateForm: (isValid: boolean) => void;
  resetFormTrigger: number;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  descricao: string;
  setDescricao: React.Dispatch<React.SetStateAction<string>>;
  categoria: string;
  setCategoria: React.Dispatch<React.SetStateAction<string>>;
  tipo: string;
  setTipo: React.Dispatch<React.SetStateAction<string>>;
  valor: string;
  setValor: React.Dispatch<React.SetStateAction<string>>;
}

export const DialogNovaTransacao = ({
  id,
  open = false,
  onConfirm,
  onCancel,
  isFormValid,
  onValidateForm,
  resetFormTrigger,
  categoria,
  setCategoria,
  descricao,
  setDescricao,
  tipo,
  setTipo,
  valor,
  setValor,
  data,
  setData,
}: IDialogNovaTransacaoProps) => {
  const [destinarParaMeta, setDestinarParaMeta] = useState(false);
  const [valorMeta, setValorMeta] = useState("");

  const { categorias } = useCategoriaContext();

  useEffect(() => {
    const isValid =
      descricao.trim() !== "" &&
      categoria.trim() !== "" &&
      tipo.trim() !== "" &&
      valor.trim() !== "" &&
      data.trim() !== "";
    onValidateForm(isValid);
  }, [descricao, categoria, tipo, valor, data, onValidateForm]);

  useEffect(() => {
    setDescricao("");
    setCategoria("");
    setTipo("");
    setValor("");
    setData("");
    setDestinarParaMeta(false);
    setValorMeta("");
  }, [
    resetFormTrigger,
    setCategoria,
    setData,
    setDescricao,
    setTipo,
    setValor,
  ]);

  return (
    <Dialog
      id={id}
      open={open}
      onClose={onCancel}
      maxWidth="sm"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          bgcolor: "#202024",
          color: "#E1E1E6",
          borderRadius: 3,
          px: 3,
          py: 3,
          maxWidth: "500px",
          maxHeight: "90vh",
          overflowX: "hidden",
          overflowY: "auto",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "#fff",
          pb: 1,
          px: 0,
        }}
      >
        Nova transação
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 1,
          px: 0,
          py: 0,
          overflow: "visible",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <TextField
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{
            "& .MuiInputBase-root": {
              color: "#E1E1E6",
              bgcolor: "#121214",
              borderRadius: 2,
            },
            "& .MuiInputLabel-root": {
              color: "#A9A9B2",
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            sx={{
              flex: "1 1 200px",
              minWidth: "200px",
              "& .MuiInputBase-root": {
                color: "#E1E1E6",
                bgcolor: "#121214",
                borderRadius: 2,
              },
              "& .MuiInputLabel-root": {
                color: "#A9A9B2",
              },
            }}
          />

          <TextField
            select
            label="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            sx={{
              flex: "1 1 200px",
              minWidth: "200px",
              "& .MuiInputBase-root": {
                color: "#E1E1E6",
                bgcolor: "#121214",
                borderRadius: 2,
              },
              "& .MuiSelect-select": {
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              },
              "& .MuiInputLabel-root": {
                color: "#A9A9B2",
              },
            }}
          >
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria.nome}>
                {categoria.nome}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <FormControl>
          <FormLabel sx={{ color: "#A9A9B2", mb: 1 }}>Tipo</FormLabel>
          <RadioGroup
            row
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <FormControlLabel
              value="Entrada"
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
              value="Saida"
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

        <TextField
          label="Valor"
          placeholder="0,00"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ color: "#E1E1E6", fontWeight: 600 }}>R$</Box>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-root": {
              color: "#E1E1E6",
              bgcolor: "#121214",
              borderRadius: 2,
            },
            "& .MuiInputLabel-root": {
              color: "#A9A9B2",
            },
            "& .MuiInputAdornment-root": {
              color: "#E1E1E6",
            },
          }}
        />

        <Box sx={{ width: "100%" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={destinarParaMeta}
                onChange={(e) => setDestinarParaMeta(e.target.checked)}
                sx={{
                  color: "#00B37E",
                  "&.Mui-checked": { color: "#00B37E" },
                }}
              />
            }
            label="Deseja destinar uma parte do valor para alguma meta?"
          />

          <Collapse in={destinarParaMeta}>
            <Box sx={{ width: "100%", boxSizing: "border-box" }}>
              <TextField
                fullWidth
                label="Valor para meta"
                placeholder="0,00"
                value={valorMeta}
                onChange={(e) => setValorMeta(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ color: "#E1E1E6", fontWeight: 600 }}>R$</Box>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mt: 2,
                  width: "100%",
                  "& .MuiInputBase-root": {
                    color: "#E1E1E6",
                    bgcolor: "#121214",
                    borderRadius: 2,
                    width: "100%",
                    boxSizing: "border-box",
                  },
                  "& .MuiInputLabel-root": { color: "#A9A9B2" },
                  "& .MuiInputAdornment-root": {
                    color: "#E1E1E6",
                  },
                }}
              />
            </Box>
          </Collapse>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
          <Button
            onClick={onCancel}
            variant="outlined"
            sx={{
              flex: "1 1 120px",
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
            CANCELAR
          </Button>

          <Button
            variant="contained"
            onClick={onConfirm}
            disabled={!isFormValid}
            sx={{
              flex: "1 1 120px",
              bgcolor: "#00B37E",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.85rem",
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
            CADASTRAR TRANSAÇÃO
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
