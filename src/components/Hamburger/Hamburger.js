import React from "react"
import styled, { css } from "styled-components"
import withContext from "../../hoc/withContext"

const Wrapper = styled.div`
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  ${({ isFixed }) =>
    isFixed &&
    css`
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

      position: absolute;
      top: 1rem;
      right: 2rem;
      opacity: 0;
      animation: slideIn 0.5s ease-in-out 0.5s forwards;

      & > div {
        background: ${({ theme }) => theme.bgcWhite};
      }
    `}
`

const Dash = styled.div`
  margin: 0.2rem 0;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.bgcDark};
`

const Hamburger = ({ appContext: { openMenu, closeMenu }, role, fixed }) => (
  <Wrapper
    onClick={role === "open" ? openMenu : role === "close" ? closeMenu : null}
    isFixed={fixed || null}
  >
    <Dash />
    <Dash />
    <Dash />
  </Wrapper>
)

export default withContext(Hamburger)
