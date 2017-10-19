import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStudents, addStudent } from "../../reducers/students";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isClicked: false
    };
    this.renderNewStudentWidget = this.renderNewStudentWidget.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  onSubmit(event) {
    event.preventDefault();
    const student = { name: event.target.name.value };
    this.props.addStudent(student);
  }

  render() {
    const { students } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={this.handleClick}
          className="btn add student"
        >
          <span className="glyphicon glyphicon-plus" />
        </button>
        {this.state.isClicked && this.renderNewStudentWidget()}
        <h1>List of students</h1>
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
            {students &&
              students.map(student => (
                <StudentItem key={student.id} student={student} />
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderNewStudentWidget() {
    const { campuses } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="list-group-item student-item">
        <ul className="list-inline">
          <li>
            <input
              name="title"
              type="text"
              className="form-like large-font"
              placeholder="Name"
            />
          </li>
          <li>
            <select name="student_name" defaultValue="" required>
              <option value="" disabled>
                (Select Campus)
              </option>
              {campuses.map(campus => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
        <button type="submit" className="btn btn-warning btn-xs pull-right">
          <span className="glyphicon glyphicon-plus" />
        </button>
      </form>
    );
  }
}

const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = { fetchStudents, addStudent };

export default connect(mapState, mapDispatch)(StudentList);
