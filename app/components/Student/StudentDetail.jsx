import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents, removeStudent } from "../../reducers/students";

class StudentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  componentDidMount() {
    this.props.getStudents();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id)
      this.props.getStudents();
  }

  render() {
    const { campus } = this.props;
    return (
      <div>

      </div>
    );
  }
}

const mapState = ({ students }) => ({ students });

const mapDispatch = (dispatch, ownProps) => {
  return {
    getStudents: () => {
      const studentId = ownProps.match.params.id;
      dispatch(fetchCampus(studentId));
    }
  };
};

export default connect(mapState, mapDispatch)(StudentDetail);
