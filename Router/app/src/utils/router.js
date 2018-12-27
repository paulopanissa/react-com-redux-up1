import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import App from './../components/App';
import Hello from './../components/Hello';
import About from "../components/About";

const router = (
  <Router history = {browserHistory}>
    <Route path="/" component={ App } />
    <Route path="/hello(/:name)" component={ Hello } />
    <Route path="/about" component={ About } />
  </Router>
);

export default router;
