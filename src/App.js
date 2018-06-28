import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainSection from './containers/MainSection/MainSection';
import DetailedView from './containers/DetailedView/DetailedView';
import './App.scss';

class App extends Component {


  render() {
    return (
        <div className="App">
            <Switch>
              <Route path="/" exact render={() => <MainSection />} />
              <Route path="/detailedView" render={() => <DetailedView />} />
            </Switch>
        </div>
    );
  }
}

export default App;
