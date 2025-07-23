import { Card, CardContent, Typography } from "@mui/material"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    { mes: 'Jan', receita: 1000 },
    { mes: 'Fev', receita: 3500 },
    { mes: 'Mar', receita: 2200 },
    { mes: 'Abr', receita: 6000 },
    { mes: 'Mai', receita: 2000 },
    { mes: 'Jun', receita: 0 },
]

export const GraficoLinha = () => {
    return (
        <Card sx={{ backgroundColor: '#262626', color: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', marginTop: '20px' }}>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Receita no pedríodo
                </Typography>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="corReceita" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00ffcc" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#00ffcc" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="mes" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} />
                        <Area 
                            type="monotone"
                            dataKey="receita"
                            stroke="#00ffcc"
                            fillOpacity={1}
                            fill="url(#corReceita)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}