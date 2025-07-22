import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  height: 490px;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 8px;
  margin-top: 12px;
  margin-left: 10px;

  nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;

    &.active {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: bold;
    }
  }
`
