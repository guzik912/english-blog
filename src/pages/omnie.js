import React, { useEffect } from "react"
import styled from "styled-components"
import withContext from '../hoc/withContext'
import { graphql } from 'gatsby'
import { Paragraph } from "../components/Paragraph/Paragraph"

const Wrapper = styled.div`
  position:relative;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ContentWrapper = styled.div`
  padding: 2rem;

  & > p:last-child {
    margin-top:2rem;
  }

  @media (min-width: 768px) {
    flex-basis: 70%;
    padding: 5rem;
  }

  @media (min-width: 1440px) {
    padding-left: 20rem;
  }
`

const ContentHeading = styled(Paragraph)`
  position: relative;
  display: inline-block;
  margin: 1rem 0;
  font-size: 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    background: ${({ theme }) => theme.fontColorCream};
    z-index: -1;
  }
`


const PolygonLeft = styled.div`
  position:fixed;
  bottom: 0;
  left:0;
  height: 50vh;
  width: 30%;
  clip-path: polygon(0 0, 0 0, 0 100%, 25% 100%, 30% 75%, 25% 50%, 30% 25%);
  background: ${({theme}) => theme.fontColorMaroon};
  z-index: -1;
`;

const PolygonRight = styled.div`
  position:fixed;
  bottom: 0;
  right:0;
  height: 100%;
  width: 35%;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 40% 75%, 50% 50%, 40% 25%);
  background: ${({theme}) => theme.bgcGray};
  z-index: -1;
`;


const AboutPage = ({data, appContext: { closeMenu }}) => {
  useEffect(() => {
    closeMenu()
  }, [])

  return (
    <Wrapper>
      <ContentWrapper>
        <ContentHeading>Hello! Cześć!</ContentHeading>
        <Paragraph>
          Nazywam się Emilia i pomyślałam że byłoby fajnie pomóc Ci zaczerpnąć
          trochę wiedzy na temat języka angielskiego!
        </Paragraph>
        <ContentHeading>Więcej o mnie?</ContentHeading>
        <Paragraph>
          Od zawsze interesowałam się językami obcymi, dlatego postanowiłam
          pójść w tym kierunku i skończyłam filologię angielską. Zdobytą wiedzą
          chciałabym dzielić się z Tobą i zachęcić Cię do nauki języka
          angielskiego, dlatego powstał ten blog!
        </Paragraph>
        <Paragraph>Mam nadzieję że do mnie dołączysz! Heey!</Paragraph>
      </ContentWrapper>
      <PolygonRight />
      <PolygonLeft />
    </Wrapper>
  )
}


export const query = graphql`
  {
    file(name: { eq: "books" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default withContext(AboutPage)
