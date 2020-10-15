import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SideNavWrapper = styled.div`
  display: none;
  position: absolute;
  top: 10rem;
  left: 0;
  width: 210px;

  @media (min-width: 768px) {
    display: block;
    margin-bottom: 4rem;
    left: 1rem;
  }

  @media (min-width: 1024px) {
    left: 2rem;
  }

  @media (min-width: 1440px) {
    left: 20rem;
  }
`

const SideArticleList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    margin: 0.5rem 0;
    align-self: flex-start;
  }
`

const ArticleListItem = styled.li`
  overflow: hidden;
`

const StyledLink = styled(Link)`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    transform: translateX(110%);
    background: ${({ theme }) => theme.fontColorCream};
    transition: 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover:before {
    transform: translateX(0);
  }

  &.active:before {
    transform: translateX(0);
  }
`

const ArticlesSideNavigation = () => {
  return (
    <SideNavWrapper>
      <SideArticleList>
        <ArticleListItem>
          <StyledLink to="/artykuly/gramatyka/czasy" activeClassName="active">
            czasy
          </StyledLink>
        </ArticleListItem>
        <ArticleListItem>
          <StyledLink
            to="/artykuly/gramatyka/mowa-zalezna-niezalezna"
            activeClassName="active"
          >
            mowa zależna / niezależna
          </StyledLink>
        </ArticleListItem>
        <ArticleListItem>
          <StyledLink
            to="/artykuly/gramatyka/strona-czynna-bierna"
            activeClassName="active"
          >
            strona czynna / bierna
          </StyledLink>
        </ArticleListItem>
        <ArticleListItem>
          <StyledLink
            to="/artykuly/gramatyka/czasowniki-modalne"
            activeClassName="active"
          >
            czasowniki modalne
          </StyledLink>
        </ArticleListItem>
      </SideArticleList>
    </SideNavWrapper>
  )
}

export default ArticlesSideNavigation
