import axios from 'axios';

//ACTION TYPES
const INITIALIZE = 'INITIALIZE_CAMPUS';
const CREATE = 'CREATE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';

//ACTION CREATORS

const init = campuses => ({ type: INITIALIZE, campuses});
const create = campus => ({ type: CREATE, campus});
const update = id => ({ type: UPDATE, id});
const remove = campus => ({ type: REMOVE, campus});

//REDUCERS

export default function reducer (campuses = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.campuses;
    case CREATE:
      return [...campuses, action.campus];
    case REMOVE:
      return campuses.filter(campus => campus.id !== action.id);
    case UPDATE:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus));
    default:
      return campuses;
  }
};

//THUNK CREATORS

export const fetchCampuses = _ => dispatch => {
  axios.get('api/campus')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching campuses unsuccessful', err));
};

export const fetchCampus = id => dispatch => {
  axios.get(`/api/campus/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching campus unsuccessful', err))
};

export const removeCampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campus/${id}`)
       .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export const addCampus = campus => dispatch => {
  axios.post('/api/campus', campus)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campus/${id}`, campus)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};
