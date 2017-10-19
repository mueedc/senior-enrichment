import axios from 'axios';

//ACTION TYPES
const INITIALIZE = 'INITIALIZE_STUDENTS';
const CREATE = 'CREATE_STUDENT';
const UPDATE = 'UPDATE_STUDENT';
const REMOVE = 'REMOVE_STUDENT';

//ACTION CREATORS

const init = students => ({ type: INITIALIZE, students});
const create = student => ({ type: CREATE, student});
const update = id => ({ type: UPDATE, id});
const remove = student => ({ type: REMOVE, student});

//REDUCERS

export default function reducer (students = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.students;
    case CREATE:
      return [...students, action.student];
    case REMOVE:
      return students.filter(student => student.id !== action.id);
    case UPDATE:
      return students.map(student => (
        action.student.id === student.id ? action.student : student));
    default:
      return students;
  }
};

//THUNK CREATORS

export const fetchStudents = _ => dispatch => {
  axios.get('api/students')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching Students unsuccessful', err));
};

export const fetchStudent = id => dispatch => {
  axios.get(`/api/students/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching student unsuccessful', err))
};

export const removeStudent = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
       .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const addStudent = student => dispatch => {
  axios.post('/api/students', student)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating student: ${student} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};
