import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampus } from "../../reducers/campuses";

class CampusDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {}
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
    const { campus } = this.props
    return (
      <div>

      </div>
    );
  }
}

const mapState = ({ campuses, students }) => ({ campuses, students })

const mapDispatch = (dispatch, ownProps) => {
  return {
    getStudents: () => {
      const campusId = ownProps.match.params.id;
      dispatch(fetchCampus(campusId));
    }
  };
};

export default connect(mapState, mapDispatch)(CampusDetail);
