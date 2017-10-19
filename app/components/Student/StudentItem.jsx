import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeStudent } from "../../reducers/students";

const StoryItem = props => {
  const { student, removeStudent } = props;
  return (

      <tr key={student.id}>
        <td></td>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.campusId}</td>
        <td>

        <button
          className="btn btn-default btn-xs"
          onClick={() => removeStudent(student.id)}
        >
          <span className="glyphicon glyphicon-remove" />
        </button>

        </td>
      </tr>


  );
};

const mapState = null;
const mapDispatch = { removeStudent };

export default connect(mapState, mapDispatch)(StoryItem);
