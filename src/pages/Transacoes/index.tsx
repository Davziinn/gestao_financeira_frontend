import { TransacaoProvider } from "../../contexts/TransactionContext"
import { Filtros } from "./components/Filtros"
import { Header } from "./components/Header"
import { Resumo } from "./components/Resumo"
import { TabelaTransacoes } from "./components/TabelaTransacoes"

export function Transacoes() {
    return (
        <TransacaoProvider>
            <Header />
            <div style={{ padding: '16px' }}>
                <Filtros />

                <div style={{ display: 'flex', gap: '16px', height: 'calc(100vh - 180px)' }}>
                    <div style={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
                        <TabelaTransacoes />
                    </div>

                    <div style={{ flex: 1 }}>
                        <Resumo />
                    </div>
                </div>
            </div>
        </TransacaoProvider>
    )
}
