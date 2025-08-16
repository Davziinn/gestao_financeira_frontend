import { useEffect } from "react";
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
  DialogActions,
} from "@mui/material";
import { useCategoriaContext } from "../../../../hooks/useCategoriaContext";

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
  }, [
    resetFormTrigger,
    setCategoria,
    setData,
    setDescricao,
    setTipo,
    setValor,
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/\D/g, "");

    const numero = parseFloat(inputValue) / 100;

    if (!isNaN(numero)) {
      const formatado = numero.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      setValor(formatado);
    } else {
      setValor("");
    }
  };

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
          placeholder="R$ 0,00"
          value={valor}
          onChange={handleChange}
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
          onClick={onConfirm}
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
          Cadastrar Transação
        </Button>
      </DialogActions>
    </Dialog>
  );
};
