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

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, toggleSidebar, themeToggler, themeMode, theme }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
