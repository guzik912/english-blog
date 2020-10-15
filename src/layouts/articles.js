import React, { useEffect } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import withContext from "../hoc/withContext"
import Image from "gatsby-image"
import { H2 } from "../components/Heading/Heading"
import { Paragraph } from "../components/Paragraph/Paragraph"
import ArticlesTopNavigation from "../components/Navigation/ArticlesNavigation/ArticlesTopNavigation"
import ArticlesSideNavigation from "../components/Navigation/ArticlesNavigation/ArticlesSideNavigation"
import BtnGoTop from '../components/BtnGoTop/BtnGoTop';

const Wrapper = styled.div`
  position: relative;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 4rem 5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const ArticleWrapper = styled.div`
  margin: 0 auto 7rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1400px) {
    width: 30%;
    margin: 0 auto 7rem;
  }
`

const Published = styled.span`
  display: inline-block;
  margin: 0.5rem 0 2rem;
  color: ${({ theme }) => theme.fontColorBlue};
  font-size: 0.9rem;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 1400px) {
    height: 300px;
  }
`

const StyledParagraph = styled(Paragraph)`
  margin: 3rem 0;
`

const NoArticlesInformation = styled(Paragraph)`
  margin: 5rem 0;
  text-align:center;
  font-weight: ${({theme}) => theme.fontWeight.bold};

  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`;

const ReadMoreBtn = styled.button`
  align-self: flex-end;
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.fontColorMaroon};
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.fontColorDark};
  cursor: pointer;
`

const ArticlesPage = ({
  data,
  pageContext: { category },
  appContext: { closeMenu },
}) => {
  useEffect(() => {
    closeMenu()
  }, [])

  const {
    allMdx: { nodes },
  } = data

  const articleCategories = [
    "gramatyka",
    "czasy",
    "mowa-zalezna-niezalezna",
    "strona-czynna-bierna",
    "czasowniki-modalne",
  ]

  const articleSubcategoriesIsVisible = articleCategories.find(
    articleCategory => category.match(articleCategory)
  )

  const renderArticles = nodes.map(
    ({
      excerpt,
      frontmatter: { title, slug, category, date, author, featuredImage },
    }) => {
      let articlePathUrl = ""
      const splittedCategories = category.split("/").map(each => each.trim())
      if (splittedCategories.length === 1) {
        articlePathUrl = `/artykuly/${splittedCategories[0]}/${slug}`
      } else if (splittedCategories.length === 2) {
        articlePathUrl = `/artykuly/${splittedCategories[0]}/${splittedCategories[1]}/${slug}`
      }
      return (
        <ArticleWrapper key={slug}>
          <H2>{title}</H2>
          <Published>
            Opublikowany {date} od {author}
          </Published>
          <StyledImage fluid={featuredImage.childImageSharp.fluid} />
          <StyledParagraph>{excerpt}</StyledParagraph>
          <ReadMoreBtn>
            <Link to={articlePathUrl}>czytaj więcej</Link>
          </ReadMoreBtn>
        </ArticleWrapper>
      )
    }
  )

  return (
    <Wrapper>
      <BtnGoTop />
      <ArticlesTopNavigation />
      {articleSubcategoriesIsVisible && <ArticlesSideNavigation />}
      {renderArticles.length > 0 ? (
        renderArticles
      ) : (
        <NoArticlesInformation>
          Uppps, obiecuję że niedługo pojawi się więcej artykułów.
        </NoArticlesInformation>
      )}
    </Wrapper>
  )
}

export const query = graphql`
  query queryArticles($category: String!) {
    allMdx(filter: { frontmatter: { category: { regex: $category } } }) {
      nodes {
        frontmatter {
          title
          slug
          category
          date
          author
          featuredImage {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 100)
      }
    }
  }
`

export default withContext(ArticlesPage)
