import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import List from 'pages/List.jsx';
import Random from 'pages/Random.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CircularProgress} from "@material-ui/core";

import "./App.css";

class App extends React.Component {
  render() {
    const {people} = this.props;
    return (
      <div className="App">
        <header>
          <HeaderBar/>
        </header>
        <main>
          {!people ?
            <CircularProgress/>
            :
            <Switch>
              <Route path="/" exact render={() => <List people={people}/>}/>
              <Route path="/random" component={() => <Random people={people}/>}/>
              <Redirect from="*" to="/"/>
            </Switch>
          }
        </main>
      </div>
    );
  }
}

export default App;
