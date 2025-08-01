import { Box, Button, Typography } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

export function SessaoExportar() {
    return (
        <Box flex={1} minWidth={250} border="1px solid #333" borderRadius={2} p={2}>
            <Typography variant="h6" mb={2}>Exportação de dados</Typography>
            <Button startIcon={<FileDownloadIcon />} sx={{ color: '#00e676' }}>
                Exportar CSV
            </Button>
            <Button startIcon={<PictureAsPdfIcon />} sx={{ color: '#00e676' }}>
                Exportar PDF
            </Button>
        </Box>
    )
}