import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import List from "../pages/List";
import Random from "../pages/Random";
import EditPerson from "./edit-person/EditPerson";
import {updatePerson} from "../store/actions";
import withLoading from "./hoc/withLoading";
import {connect} from "react-redux";

const RouteContent = ({ people, updatePerson }) => (
  <Switch>
    <Route path="/" exact render={() => <List people={people}/>}/>
    <Route path="/random" component={() => <Random people={people}/>}/>
    <Route path="/people/edit/:id" component={(props) =>
      <EditPerson person={people.find(p => p.id === parseInt(props.match.params.id))}
                  onSave={updatePerson} />}/>
    <Redirect from="*" to="/"/>
  </Switch>
);

const mapStateToProps = state => ({
  people : state.people
});

const mapDispatchToProps = dispatch => ({
  updatePerson: (person) => dispatch(updatePerson(person))
});


export default withLoading(connect(
  mapStateToProps,
  mapDispatchToProps)(RouteContent));