import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.fontColorMaroon};
  font-size: 1.6rem;
  z-index: 98;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

const BtnGoTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return <Wrapper onClick={scrollTop}>&#x0005E;</Wrapper>
}

export default BtnGoTop
