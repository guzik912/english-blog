import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLogo = styled.span`
  color: ${({ theme }) => theme.fontColorDark};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`

const StyledAnd = styled.span`
  color: ${({ theme }) => theme.fontColorMaroon};
`

const Logo = () => (
  <Link to="/">
    <StyledLogo>
      Emilia <StyledAnd>&</StyledAnd> English
    </StyledLogo>
  </Link>
)

export default Logo
