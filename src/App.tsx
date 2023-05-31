import React, { FC, ReactElement} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/Dashboard';
import { NewVideo } from './components/Video/New/NewVideo';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App:FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/videos/new" exact>
              <NewVideo />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
