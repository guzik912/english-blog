import React, { useState } from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/mainTheme"
import AppContext from '../context/context';
import Navigation from "../components/Navigation/Navigation"
import Menu from '../components/Menu/Menu';

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const context = {
    openMenu,
    closeMenu
  }

  return (
    <AppContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <>
          {isMenuOpen && <Menu />}
          <Navigation />
          {children}
        </>
      </ThemeProvider>
      <GlobalStyle />
    </AppContext.Provider>
  )
}

export default MainLayout
