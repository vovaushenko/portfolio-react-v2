import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { useDarkMode } from './hooks/useDarkTheme';
import { darkTheme, lightTheme } from './Themes';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  const [theme, themeToggler] = useDarkMode('');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
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
