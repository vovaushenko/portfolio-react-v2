import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Home from './pages';
import SigninPage from './pages/signin';
import ResumePage from './pages/resume';
import { useGlobalContext } from './context/context';

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
            <Route path="/contact" component={SigninPage} exact />
            <Route path="/resume" component={ResumePage} exact />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
