import React, { useEffect } from "react"
import styled from "styled-components"
import withContext from "../hoc/withContext"
import { H2 } from "../components/Heading/Heading"
import { Paragraph } from "../components/Paragraph/Paragraph"
import BtnGoTop from "../components/BtnGoTop/BtnGoTop"
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

const StyledH2 = styled(H2)`
  margin: 2rem 0 1rem;
`

const FaqPage = ({ appContext: { closeMenu } }) => {
  useEffect(() => {
    closeMenu()
  }, [])
  return (
    <Wrapper>
      <BtnGoTop />
      <ColouredRectangulars smallerVerticalFirst />
      <ColouredRectangulars smallerVerticalSecond />
      <ColouredRectangulars smallerVerticalThird />
      <ColouredRectangulars smallerHorizontal />
      <StyledH2 cream>Dlaczego wybrałam język angielski?</StyledH2>
      <Paragraph>
        Uwielbiam języki obce. Swoją naukę zaczęłam od języka angielskiego juz
        od podstawówki. Uwielbiam tak naprawdę wszystki języki obce i również
        rozwijam swoją naukę w języki hiszpańskim.
      </Paragraph>
      <StyledH2 cream>Czy język angielski jest trudny?</StyledH2>
      <Paragraph>
        Język angielski, jak większość języków obcych ma swój poziom trudności.
        Odpowiadając na to jednym pytaniem uważam że każdy język jest możliwy do
        nauczenia się bez względu na poziom trudności. Wystarczą tylko chęci.
      </Paragraph>
      <StyledH2 cream>Jak długo zajmuje nauka języka angielskiego?</StyledH2>
      <Paragraph>
        Nie ma jednoznacznej odpowiedzi ile zajmuje nauka języka angielskiego.
        Im więcej chęci i czasu poświęcisz, efekty przyjdą naprawdę szybko.
        Opanowanie podstaw w celu porozumienia się przychodzi naprawde szybko.
      </Paragraph>
      <StyledH2 cream>
        Czy mogę nauczyć się języka angielskiego po 40?
      </StyledH2>
      <Paragraph>
        Oczywiście! Nigdy na naukę nie jest za późno. Czy to nauka języka
        obcego, czy jakiegokolwiek przebranzowienia jest możliwa do
        zrealizowania w kazdym wieku. Chęć rozwoju to podstawa.
      </Paragraph>
      <StyledH2 cream>Czy warto uczyć się języka angielskiego?</StyledH2>
      <Paragraph>
        Język angielski jest językiem uniwersalnym, wykorzystywanym na całym
        świecie. Uwazam ze to jeden z najbardziej praktycznych języków na
        świecie, który przyda ci się w każdej sytuacji, pracy, jakiejkolwiek
        innej okolicznosci.
      </Paragraph>
      <StyledH2 cream>
        Czy oferujesz korepetycje lub inny indywidualny tryb nauczania?
      </StyledH2>
      <Paragraph>
        Tak, z mojej strony oferuję również korepetycje online dopasowane
        indywidualnie do Ciebie. Zachęcam jednak do czerpania wiedzy z moich
        artykułów, które udostępniam na blogu. Jest tam dawka wiedzy która jest
        niezbedna i bardzo pomocna osobom początkującym. Chociaż są tam również
        zaawansowane zagadnienia które bedą ci potrzebne w dalszym rozwoju
        nauki.
      </Paragraph>
    </Wrapper>
  )
}

export default withContext(FaqPage)
