import { Card, CardContent, Typography, Box } from "@mui/material"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
    { categoria: 'Alimentação', valor: 40 },
    { categoria: 'Transporte', valor: 30 },
    { categoria: 'Saúde', valor: 20 },
    { categoria: 'Educação', valor: 15 },
    { categoria: 'Lazer', valor: 10 },
]

const COLORS = ['#00E5FF', '#D500F9', '#FFAB00', '#00E676', '#FFFFFF']

export const GraficoPizza = () => {
    return (
        <Card sx={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', marginTop: '20px' }}>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Categorias
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: '35%' }}>
                        {data.map((item, index) => (
                            <Typography
                                key={index}
                                variant="subtitle2"
                                sx={{
                                    color: COLORS[index],
                                    fontWeight: 500,
                                    mb: 1,
                                    fontSize: '0.785rem',
                                }}
                            >
                                {item.categoria} ({item.valor}%)
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={{ width: '65%' }}>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    paddingAngle={3}
                                    dataKey="valor"
                                    stroke="none"
                                    outerRadius={80}
                                    innerRadius={60}
                                >
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
