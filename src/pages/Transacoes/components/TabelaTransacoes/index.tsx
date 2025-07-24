import {
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    TablePagination
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useState } from "react"

const dados = [
    { data: "31/03/23", descricao: "Salário", categoria: "Salário", valor: "R$ 4000", tipo: "Entrada", entrada: true },
    { data: "30/03/23", descricao: "Supermercado", categoria: "Alimentação", valor: "- R$ 3500", tipo: "Entrada", entrada: false },
    { data: "30/03/23", descricao: "Freelance", categoria: "Freelas", valor: "R$ 4500", tipo: "Saida", entrada: true },
    { data: "30/03/23", descricao: "Restaurante", categoria: "Restaurante", valor: "- R$ 1600", tipo: "Saida", entrada: false },
    { data: "29/03/23", descricao: "Transporte", categoria: "Transporte", valor: "- R$ 100", tipo: "Saida", entrada: false },
    { data: "28/03/23", descricao: "Venda", categoria: "Venda", valor: "R$ 800", tipo: "Entrada", entrada: true },
]

export function TabelaTransacoes() {
    const [page, setPage] = useState(0)
    const rowsPerPage = 5

    const dadosPagina = dados.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage)
    }

    return (
        <Box sx={{ backgroundColor: "#1e1e1e", borderRadius: 2, padding: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ color: "white", marginBottom: 2 }}>
                Lista de transações
            </Typography>

            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: "#262626",
                    flexGrow: 1,
                    overflowX: 'hidden',
                    borderRadius: 2,
                }}
            >
                <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
                    <TableHead>
                        <TableRow>
                            {["Data", "Descrição", "Categoria", "Valor", "Tipo", "Ações"].map((col) => (
                                <TableCell
                                    key={col}
                                    sx={{
                                        color: "white",
                                        fontWeight: "bold",
                                        ...(col === "Descrição" && { wordBreak: 'break-word', overflowWrap: 'break-word' }),
                                        maxWidth: col === "Descrição" ? 200 : 'auto'
                                    }}
                                >
                                    {col}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dadosPagina.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ color: "white" }}>{row.data}</TableCell>
                                <TableCell sx={{ color: "white", wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: 200 }}>{row.descricao}</TableCell>
                                <TableCell sx={{ color: "white" }}>{row.categoria}</TableCell>
                                <TableCell
                                    sx={{
                                        color: row.entrada ? "#4CAF50" : "#EF4444",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {row.valor}
                                </TableCell>
                                <TableCell sx={{ color: "white" }}>{row.tipo}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <EditIcon sx={{ color: "white" }} />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon sx={{ color: "white" }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={dados.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                sx={{
                    color: "white",
                    ".MuiTablePagination-displayedRows": { color: "white" },
                    ".MuiSelect-select": { color: "white" },
                    ".MuiSvgIcon-root": { color: "white" },
                    backgroundColor: "#262626",
                }}
            />
        </Box>
    )
}
