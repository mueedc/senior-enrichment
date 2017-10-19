import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeCampus } from "../../reducers/campuses";

const StoryItem = props => {
  const { campus, removeCampus } = props;
  return (
    <li className="list-group-item campus-item">
      <Link className="large-font" to={`/campus/${campus.id}`}>
        {campus.name}
      </Link>
    </li>
  );
};

const mapState = null;
const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(StoryItem);
