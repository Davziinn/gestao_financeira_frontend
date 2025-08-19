import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts";
import { Dashboard } from "../pages/Dashboard";
import { Transacoes } from "../pages/Transacoes/Transacoes";
import { MetaFinanceira } from "../pages/MetaFinanceira";
import { Relatorios } from "../pages/Relatorios";
import { Categorias } from "../pages/Categorias/Categorias";
import { Notificacao } from "../pages/Notificacoes";
import { Configuracoes } from "../pages/Configuracoes";
import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transacoes" element={<Transacoes />} />
                <Route path="/meta-financeira" element={<MetaFinanceira />} />
                <Route path="/relatorios" element={<Relatorios />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/notificacoes" element={<Notificacao />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
            </Route>
        </Routes>
    )
}