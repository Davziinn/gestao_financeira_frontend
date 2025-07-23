import { Cards } from "./components/Cards";
import { GraficoLinha } from "./components/GraficoLinha";
import { GraficoPizza } from "./components/GraficoPizza";

export function Dashboard() {
    return (
        <>
            <Cards />
            <div style={{ display: 'flex', height: '100vh', gap: 8 }}>
                <div style={{ flex: '7' }}>
                    <GraficoLinha />
                </div>
                <div style={{ flex: '3' }}>
                    <GraficoPizza />
                </div>
            </div>
        </>
    )
}
