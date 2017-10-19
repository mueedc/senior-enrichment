import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { campuses, fetchCampuses, fetchCampus } from "../../reducers/campuses";
import CampusItem from './CampusItem';

class CampusList extends Component {

 componentDidMount() {
    this.props.fetchCampuses();
  }

 render () {
    const { campuses } = this.props;
    return (
      <div>
          <h1>List of campuses</h1>
          {
            campuses &&
            campuses.map(campus => (<CampusItem key={campus.id} campus={campus} />))
          }
      </div>
    );
  }
}

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = { fetchCampuses };

export default connect(mapState, mapDispatch)(CampusList);
