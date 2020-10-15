import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Hamburger from '../Hamburger/Hamburger'
import withContext from '../../hoc/withContext'

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.95);
  z-index: 100;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const MenuList = styled.ul`
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  list-style: none;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0;
  animation: slideIn 0.5s ease-in-out 0.5s forwards;


  &:nth-child(2) {
    margin-left: 1rem;
    border-left: 2px solid ${({ theme }) => theme.fontColorBlue};
  }

  &:nth-child(3) {
    margin-left: 2rem;
    border-left: 2px solid ${({ theme }) => theme.fontColorTurquoise};
  }
`

const MenuListItem = styled.li`
  position: relative;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.fontColorWhite};
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
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
`

const Menu = ({appContext: { closeMenu }}) => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuListItem>
          <Link to="/omnie">o mnie</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/artykuly">artykuly</Link>
        </MenuListItem>
        <MenuList>
          <MenuListItem>
            <Link to="/artykuly/gramatyka">gramatyka</Link>
          </MenuListItem>
          <MenuList>
            <MenuListItem>
              <Link to="/artykuly/gramatyka/czasy">czasy</Link>
            </MenuListItem>
            <MenuListItem>
              <Link to="/artykuly/gramatyka/mowa-zalezna-niezalezna">
                mowa zalezna / niezalezna
              </Link>
            </MenuListItem>
            <MenuListItem>
              <Link to="/artykuly/gramatyka/strona-czynna-bierna">
                strona czynna / bierna
              </Link>
            </MenuListItem>
            <MenuListItem>
              <Link to="/artykuly/gramatyka/czasowniki-modalne">
                czasowniki modalne
              </Link>
            </MenuListItem>
          </MenuList>
          <MenuListItem>
            <Link to="/artykuly/slownictwo">slownictwo</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to="/artykuly/rozmowki">rozmowki</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to="/artykuly/motywacja">motywacja</Link>
          </MenuListItem>
        </MenuList>
        <MenuListItem>
          <Link to="/faq">faq</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/kontakt">kontakt</Link>
        </MenuListItem>
      </MenuList>
      <Hamburger role='close' fixed />
    </MenuWrapper>
  )
}

export default withContext(Menu)
