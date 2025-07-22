import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`