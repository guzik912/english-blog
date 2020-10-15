import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { H2 } from "../components/Heading/Heading"
import { Paragraph } from "../components/Paragraph/Paragraph"
import BtnGoTop from '../components/BtnGoTop/BtnGoTop'
import { MDXRenderer } from "gatsby-plugin-mdx"

const Wrapper = styled.div`
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 5rem 10rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 15rem;
  }

  @media (min-width: 1440px) {
    padding: 5rem 35rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Category = styled(Paragraph)`
  display: block;
  margin: 1rem auto 3rem;
  width: 70%;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.fontColorBlue};
  border-top: 1px solid ${({ theme }) => theme.fontColorBlue};
  text-align: center;
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
  margin-bottom: 3rem;
  object-fit: cover;

  @media (min-width: 1400px) {
    height: 300px;
  }
`

const GoBackBtn = styled.button`
  display: inline-block;
  margin: 5rem 0 3rem;
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.fontColorMaroon};
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.fontColorDark};
  cursor: pointer;
`

const ArticleLayout = ({ data }) => {
  return (
    <Wrapper>
      <BtnGoTop />
      <Category>{data.mdx.frontmatter.categoryTitle}</Category>
      <H2>{data.mdx.frontmatter.title}</H2>
      <Published>
        Opublikowany {data.mdx.frontmatter.date} od{" "}
        {data.mdx.frontmatter.author}
      </Published>
      <StyledImage
        fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <GoBackBtn>
        <Link to="/artykuly">&lt; cofnij do artykułów</Link>
      </GoBackBtn>
    </Wrapper>
  )
}

export const query = graphql`
  query queryArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        categoryTitle
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
      body
    }
  }
`

export default ArticleLayout
