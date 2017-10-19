import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../../reducers/students";

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
    const { campus } = this.props
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>#</th>
              <th>Name</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody>
            {
              // campus &&
              // campus.map(campus => (
              //   <tr key={campus.id}>
              //     <td>
              //       <button className="btn btn-default btn-xs">
              //         <span className="glyphicon glyphicon-play" />
              //       </button>
              //     </td>
              //     <td>{campus.name}</td>
              //     <td>
              //       <span>
              //         {campus.artists
              //           ? campus.artists.map(artist => artist.name).join(", ")
              //           : null}
              //       </span>
              //     </td>
              //     <td>{campus.genre}</td>
              //   </tr>
              // ))
}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = state => ({
  student: state.studentes
});

const mapDispatch = (dispatch, ownProps) => {
  return {
    getStudents: () => {
      const studentId = ownProps.match.params.id;
      dispatch(fetchCampus(studentId));
    }
  };
};

export default connect(mapState, mapDispatch)(StudentDetail);
