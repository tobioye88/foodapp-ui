import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home  from './pages/Home';
import About  from './pages/About';
import Page404 from './pages/Page404';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
