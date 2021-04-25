import React, { useState, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkTheme';
import { darkTheme, lightTheme } from '../Themes';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // sidebar functionality
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // dark mode functionality
  const [theme, themeToggler] = useDarkMode('');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  //currently on screen - Intersection Observer - in resume page
  const [currentlyInViewport, setCurrentlyInViewport] = useState('');

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        themeToggler,
        themeMode,
        theme,
        currentlyInViewport,
        setCurrentlyInViewport,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
