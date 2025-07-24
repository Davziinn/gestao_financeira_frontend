import styled from "styled-components"

export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    
`

export const HeaderTextGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderTitle = styled.h1`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;
    margin: 0;
`

export const HeaderSubtitle = styled.h2`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
    margin: 0;
`
