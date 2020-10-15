import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { H1, H2 } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { ColouredRectangulars } from '../components/ColouredRectangulars/ColouredRectangulars';


const WelcomeWrapper = styled.div`
  padding: 3rem 1.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }

  @media (min-width: 1440px) {
    padding: 3rem 20rem;
  }
`

const WelcomeContentBoxTemplate = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > a {
    flex-basis: 100%;
  }

  @media (min-width: 768px) {
    & > a:nth-child(2) {
      flex-basis: 48%;
      margin-right: .5rem;
    }

    & > a:nth-child(3) {
      flex-basis: 48%;
      margin-left: .5rem;
    }
  }
`

const WelcomeContentBox = styled.div`
  position:relative;
  margin: 1rem 0;
  padding: 1.5rem;
  height: 180px;
  background: ${({theme}) => theme.bgcGrayLight};
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;


const WelcomePage = () => {
  return (
    <WelcomeWrapper>
      <H1>Hello.</H1>
      <WelcomeContentBoxTemplate>
        <Link to="/artykuly">
          <WelcomeContentBox>
            <ColouredRectangulars blue/>
            <H2 blue>Artykuly</H2>
            <Paragraph>
              Tutaj znajdziesz wszystkie artykuły z róznych kategorii takich
              jak: gramatyka, czasy, słownictwo!
            </Paragraph>
          </WelcomeContentBox>
        </Link>
        <Link to="/omnie">
          <WelcomeContentBox>
            <ColouredRectangulars cream/>
            <H2 cream>O mnie .</H2>
            <Paragraph>Cos o mnie !</Paragraph>
          </WelcomeContentBox>
        </Link>
        <Link to="/faq">
          <WelcomeContentBox>
            <ColouredRectangulars gray/>
            <H2 gray>FAQ</H2>
            <Paragraph>
              Zajrzyj na faq zeby dowiedziec sie troszeczke wiecej!
            </Paragraph>
          </WelcomeContentBox>
        </Link>
        <Link to="/kontakt">
          <WelcomeContentBox>
            <ColouredRectangulars turquoise/>
            <H2 turquoise>Kontakt</H2>
            <Paragraph>
              Jezeli masz jakies pytania, skontaktuj się ze mną. Pomogę jeśli
              zechcesz!
            </Paragraph>
          </WelcomeContentBox>
        </Link>
      </WelcomeContentBoxTemplate>
    </WelcomeWrapper>
  )
}

export default WelcomePage
