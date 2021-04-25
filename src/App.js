import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Home from './pages';
import ResumePage from './pages/resume';
import { useGlobalContext } from './context/context';
import ErrorPage from './pages/error';

function App() {
  const { themeMode } = useGlobalContext();

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/resume" component={ResumePage} exact />
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
