import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem 1rem;
  height: 100vh;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 8px;
  margin-top: 12px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: sticky;
  top: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.textPrimary}aa; 
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
