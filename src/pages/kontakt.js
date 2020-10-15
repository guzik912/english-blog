import React, { useEffect } from "react"
import styled from "styled-components"
import withContext from "../hoc/withContext"
import { H2 } from "../components/Heading/Heading"
import { Paragraph } from "../components/Paragraph/Paragraph"
import { ColouredRectangulars } from "../components/ColouredRectangulars/ColouredRectangulars"

const Wrapper = styled.div`
  position: relative;
  padding: 2rem;
  min-height: calc(100vh - 4rem);

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 1440px) {
    padding: 2rem 20rem;
  }
`

const ContentWrapper = styled.div`
  width: 80%;
  margin: 1rem auto 0;

  @media (min-width: 768px) {
    width: 60%;
  }
`

const ContactWrapper = styled.div`
  margin-top: 2rem;

  p {
    margin-top: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`

const StyledH2 = styled(H2)`
  margin-bottom: 1rem;
  font-size: 1.8rem;
`

const ContactPage = ({ appContext: { closeMenu } }) => {
  useEffect(() => {
    closeMenu()
  }, [])

  return (
    <Wrapper>
      <ColouredRectangulars smallerVerticalFirst />
      <ColouredRectangulars smallerVerticalSecond />
      <ColouredRectangulars smallerVerticalThird />
      <ColouredRectangulars smallerHorizontal />
      <ContentWrapper>
        <StyledH2 cream>Zapraszam do kontaktu!</StyledH2>
        <Paragraph>
          Mam nadzieję ze Emilia & English blog pomga w twoim rozwoju nauki.
          Jezeli jednak interesuje cię szybszy rozwój w nauce i chciałbyś
          spróbować indywidualnego trybu nauczania, mogę zaoferować korepetycje
          online. Ponizej znajdziesz 2 opcje kontaktu ze mna,
        </Paragraph>
        <ContactWrapper>
          <Paragraph>www.facebook.com/emilia.guzik</Paragraph>
          <Paragraph>emilia.g0101@gmail.com</Paragraph>
        </ContactWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default withContext(ContactPage)
