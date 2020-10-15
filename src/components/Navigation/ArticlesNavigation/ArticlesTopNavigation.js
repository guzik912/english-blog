import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TopNavWrapper = styled.div`
  display: none;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    display: block;
  }
`

const TopArticleList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    margin: 0 2rem;
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

const ArticlesTopNavigation = () => {
  return (
    <TopNavWrapper>
      <TopArticleList>
        <ArticleListItem>
          <StyledLink to="/artykuly/gramatyka" activeClassName="active">
            gramatyka
          </StyledLink>
        </ArticleListItem>
        <ArticleListItem>
          <StyledLink to="/artykuly/slownictwo" activeClassName="active">
            słownictwo
          </StyledLink>
        </ArticleListItem>
        <ArticleListItem>
          <StyledLink to="/artykuly/rozmowki" activeClassName="active">
            rozmówki
          </StyledLink>
        </ArticleListItem>
        <ArticleListItem>
          <StyledLink to="/artykuly/motywacja" activeClassName="active">
            motywacja
          </StyledLink>
        </ArticleListItem>
      </TopArticleList>
    </TopNavWrapper>
  )
}

export default ArticlesTopNavigation
