import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LoginView from 'views/LoginView/LoginView';
import RegisterView from 'views/RegisterView/RegisterView';
import HomeView from 'views/HomeView/HomeView';
import AuthPage from 'views/AuthPage/AuthPage';
import PrivateRoute from 'helpfulFunctions/PrivateRoute';

const Root = () => {
  return (
    <Router basename="/">
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={RegisterView} />
            <PrivateRoute path="/authpagehome" component={AuthPage} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default Root;
