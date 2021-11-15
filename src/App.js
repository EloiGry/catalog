import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Films from './Pages/Films';
import Film from './Pages/Film';
import NotFound from './Pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>
        <Route exact path="/" component={Films} />
        <Route path="/films/:id" component={Film} />
        <Route path="*" component={NotFound} />

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
