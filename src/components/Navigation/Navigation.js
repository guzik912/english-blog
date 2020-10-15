import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import withContext from "../../hoc/withContext"
import Logo from "../Logo/Logo"
import Hamburger from "../Hamburger/Hamburger"

const NavigationWrapper = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 768px) {
    height: 4rem;
    padding: 1rem 5rem;
  }

  @media (min-width: 1440px) {
    padding: 1rem 20rem;
  }
`

const NavigationList = styled.ul`
  display: none;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavigationListItem = styled.li`
  margin-left: 2rem;
  overflow: hidden;
`

const StyledLink = styled(Link)`
  position: relative;
  display: none;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.fontColorDark};
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.bgcDark};
    transform: translateX(-100%);
    transition: 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    display: block;
  }

  &:hover:before {
    transform: translateX(0);
  }

  &.active:before {
    transform: translateX(0);
  }
`

const Navigation = ({ appContext: { openMenu } }) => {
  return (
    <NavigationWrapper>
      <Logo />
      <NavigationList>
        <NavigationListItem>
          <StyledLink to="/omnie" activeClassName="active">
            o mnie
          </StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink to="/artykuly" activeClassName="active">
            artykuły
          </StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink to="/faq" activeClassName="active">
            faq
          </StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink to="/kontakt" activeClassName="active">
            kontakt
          </StyledLink>
        </NavigationListItem>
      </NavigationList>
      <Hamburger role="open" />
    </NavigationWrapper>
  )
}

export default withContext(Navigation)
