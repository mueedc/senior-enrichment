import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import history from "./history";
import Navbar from "./components/Navbar";
import CampusList from "./components/Campus/CampusList";
import StudentList from "./components/Student/StudentList";
import { fetchCampuses } from "./reducers/campuses";
import { fetchStudents } from "./reducers/students";
import SingleCampus from './components/Campus/SingleCampus';

class Routes extends Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Router history={history}>
        <Home>
          <Switch>
            <Route exact path="/campus" component={CampusList} />
            <Route path="/campus/:id" component={SingleCampus} />
            <Route exact path="/student" component={StudentList} />
            <Route component={CampusList} />
          </Switch>
        </Home>
      </Router>
    );
  }
}

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }
});

export default connect(mapProps, mapDispatch)(Routes);
