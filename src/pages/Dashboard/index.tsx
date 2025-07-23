import { Cards } from "./components/Cards";
import { GraficoLinha } from "./components/GraficoLinha";

export function Dashboard() {
    return (
        <>
            <Cards />
            <div style={{ display: 'flex', height: '100vh', gap: 8 }}>
                <div style={{ flex: '6' }}>
                    <GraficoLinha />
                </div>
                <div style={{ flex: '4' }}>
                    GRÁFICO PIZZA
                </div>
            </div>
        </>
    )
}
