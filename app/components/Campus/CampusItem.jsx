import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeCampus } from "../../reducers/campuses";

const CampusItem = props => {
  const { campus, removeCampus } = props;
  return (
    <li className="list-group-item campus-item">
      <Link className="large-font" to={`/campus/${campus.id}`}>
        <img src={campus.image} />
        <span> {campus.name} </span>
      </Link>
      <button
          className="btn btn-default btn-xs"
          onClick={() => removeCampus(campus.id)}
        >
          <span className="glyphicon glyphicon-remove" />
        </button>
    </li>
  );
};

const mapState = null;
const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(CampusItem);
