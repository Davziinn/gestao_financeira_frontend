import { useEffect } from "react"
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
    TextField
} from "@mui/material"

interface IDialogNovaTransacaoProps {
    id: string
    open?: boolean
    isFormValid: boolean
    onConfirm: () => void
    onCancel: () => void
    onValidateForm: (isValid: boolean) => void
    resetFormTrigger: number
    data: string
    setData: React.Dispatch<React.SetStateAction<string>>
    descricao: string
    setDescricao: React.Dispatch<React.SetStateAction<string>>
    categoria: string
    setCategoria: React.Dispatch<React.SetStateAction<string>>
    tipo: string
    setTipo: React.Dispatch<React.SetStateAction<string>>
    valor: string
    setValor: React.Dispatch<React.SetStateAction<string>>
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
    setData
}: IDialogNovaTransacaoProps) => {

    useEffect(() => {
        const isValid =
            descricao.trim() !== '' &&
            categoria.trim() !== '' &&
            tipo.trim() !== '' &&
            valor.trim() !== '' &&
            data.trim() !== ''
        onValidateForm(isValid)
    }, [descricao, categoria, tipo, valor, data, onValidateForm])

    useEffect(() => {
        setDescricao('')
        setCategoria('')
        setTipo('')
        setValor('')
        setData('')
    }, [resetFormTrigger, setCategoria, setData, setDescricao, setTipo, setValor])

    return (
        <Dialog
            id={id}
            open={open}
            onClose={onCancel}
            PaperProps={{
                sx: {
                    bgcolor: '#202024',
                    color: '#E1E1E6',
                    borderRadius: 3,
                    px: 5,
                    py: 5
                }
            }}
        >
            <DialogTitle
                sx={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#fff',
                    pb: 1,
                }}
            >
                Nova transação
            </DialogTitle>

            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
                <TextField
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        '& .MuiInputBase-root': {
                            color: '#E1E1E6',
                            bgcolor: '#121214',
                            borderRadius: 2
                        },
                        '& .MuiInputLabel-root': {
                            color: '#A9A9B2'
                        }
                    }}
                />

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        fullWidth
                        label="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        sx={{
                            '& .MuiInputBase-root': {
                                color: '#E1E1E6',
                                bgcolor: '#121214',
                                borderRadius: 2
                            },
                            '& .MuiInputLabel-root': {
                                color: '#A9A9B2'
                            }
                        }}
                    />

                    <TextField
                        select
                        fullWidth
                        label="Categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        sx={{
                            '& .MuiInputBase-root': {
                                color: '#E1E1E6',
                                bgcolor: '#121214',
                                borderRadius: 2,
                                minWidth: 0,
                            },
                            '& .MuiSelect-select': {
                                minWidth: '120px',
                                display: 'block',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis'
                            },
                            '& .MuiInputLabel-root': {
                                color: '#A9A9B2'
                            }
                        }}
                    >
                        <MenuItem value="Moradia">Moradia</MenuItem>
                        <MenuItem value="Alimentação">Alimentação</MenuItem>
                        <MenuItem value="Transporte">Transporte</MenuItem>
                    </TextField>
                </Box>

                <FormControl>
                    <FormLabel sx={{ color: '#A9A9B2', mb: 1 }}>Tipo</FormLabel>
                    <RadioGroup
                        row
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <FormControlLabel
                            value="entrada"
                            control={<Radio sx={{ color: '#00B37E', '&.Mui-checked': { color: '#00B37E' } }} />}
                            label="Entrada"
                        />
                        <FormControlLabel
                            value="saida"
                            control={<Radio sx={{ color: '#F75A68', '&.Mui-checked': { color: '#F75A68' } }} />}
                            label="Saída"
                        />
                    </RadioGroup>
                </FormControl>

                <TextField
                    label="Valor"
                    placeholder="R$ 0,00"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    sx={{
                        '& .MuiInputBase-root': {
                            color: '#E1E1E6',
                            bgcolor: '#121214',
                            borderRadius: 2
                        },
                        '& .MuiInputLabel-root': {
                            color: '#A9A9B2'
                        }
                    }}
                />

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                        fullWidth
                        onClick={onCancel}
                        variant="outlined"
                        sx={{
                            borderColor: '#F75A68',
                            color: '#F75A68',
                            fontWeight: 600,
                            fontSize: '1rem',
                            borderRadius: 2,
                            textTransform: 'none',
                            py: 1.25,
                            '&:hover': {
                                bgcolor: 'rgba(247, 90, 104, 0.08)',
                                borderColor: '#f94c5a',
                                boxShadow: '0 0 0 1px #f94c5a'
                            }
                        }}
                    >
                        Cancelar
                    </Button>

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={onConfirm}
                        disabled={!isFormValid}
                        sx={{
                            bgcolor: '#00B37E',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '1rem',
                            borderRadius: 2,
                            textTransform: 'none',
                            py: 1.25,
                            '&:hover': {
                                bgcolor: '#019466',
                                boxShadow: '0 0 0 1px #019466'
                            },
                            '&.Mui-disabled': {
                                bgcolor: '#2e2e2e',
                                color: '#777',
                                cursor: 'not-allowed'
                            }
                        }}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
