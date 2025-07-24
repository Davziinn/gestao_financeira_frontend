import { Card, CardContent, Typography, Box } from "@mui/material"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
    { resumo: 'Entrada', valor: 40 },
    { resumo: 'Saida', valor: 60 },
]

const COLORS = ['#4CAF50', '#EF4444']

export const Resumo = () => {
    return (
        <Card
            sx={{
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 2
            }}
        >
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Resumo
                </Typography>

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ width: 160, height: 200 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    paddingAngle={2}
                                    dataKey="valor"
                                    stroke="none"
                                    outerRadius={80}
                                    innerRadius={50}
                                >
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>

                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly' }}>
                    {data.map((item, index) => (
                        <Typography
                            key={index}
                            variant="subtitle2"
                            sx={{
                                color: COLORS[index],
                                fontWeight: 500,
                                fontSize: '0.85rem'
                            }}
                        >
                            {item.resumo} ({item.valor}%)
                        </Typography>
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}
