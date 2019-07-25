import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';
import { Navbar, Container, Button } from 'react-bootstrap';

import Home from './components/Home';
import Members from './containers/Members';

import './App.css';

const title = 'Here is /App.tsx';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>

    <Navbar bg="primary">
      <Navbar.Brand>{title}</Navbar.Brand>
    </Navbar>
    <Container>
      <Button>hoge</Button>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:companyName/members" component={Members} />
        <Redirect to="/" />
      </Switch>
    </Container>
  </>
);

export default App;
