import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampus } from "../../reducers/campuses";

class SingleCampus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { campus, students } = this.props;
    return (
      <div>
        <h3>{campus.name}</h3>
        <ul>
          {campus &&
            campus.students.map(student => (
              <li key={student.id}>{`${student.id} - ${student.name}`}</li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapState = ({ campuses, students }, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    campus: campuses.find(campus => campus.id === paramId),
    students
  };
};

const mapDispatch = ({ fetchCampus }) => ({
  fetchCampus
});

export default connect(mapState, mapDispatch)(SingleCampus);
