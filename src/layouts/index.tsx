import { Outlet } from "react-router-dom";
import { Content, LayoutContainer } from "./styles";
import { Sidebar } from "../components/Sidebar";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
}