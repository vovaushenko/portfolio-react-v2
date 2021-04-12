import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { useDarkMode } from './hooks/useDarkTheme';
import { darkTheme, lightTheme } from './Themes';
import Home from './pages';
import SigninPage from './pages/signin';
import { useGlobalContext } from './context/context';

function App() {
  const { themeMode, themeToggler } = useGlobalContext();

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home themeToggler={themeToggler} />
            </Route>
            <Route path="/contact" component={SigninPage} exact />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
