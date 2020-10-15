import styled, { css } from "styled-components";


export const H1 = styled.h1`
  color: ${({ theme }) => theme.fontColorDark};
  font-size: 3.8rem;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  text-transform: uppercase;
`


export const H2 = styled.h2`
  color: ${({ theme }) => theme.fontColorDark};
  font-size: 1.6rem;
  font-weight: ${({theme}) => theme.fontWeight.regular};

  ${({ blue }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.fontColorBlue};
      font-weight: ${({theme}) => theme.fontWeight.bold};
    `}
  ${({ cream }) =>
    cream &&
    css`
      color: ${({ theme }) => theme.fontColorCream};
      font-weight: ${({theme}) => theme.fontWeight.bold};
    `}
  ${({ turquoise }) =>
    turquoise &&
    css`
      color: ${({ theme }) => theme.fontColorTurquoise};
      font-weight: ${({theme}) => theme.fontWeight.bold};
    `}
  ${({ gray }) =>
    gray &&
    css`
      color: ${({ theme }) => theme.fontColorGray};
      font-weight: ${({theme}) => theme.fontWeight.bold};
    `}
    ${({ maroon }) =>
    maroon &&
    css`
      color: ${({ theme }) => theme.fontColorMaroon};
      font-weight: ${({theme}) => theme.fontWeight.bold};
    `}
`
