import React from "react";
import { Link } from "react-router-dom";

export const PotluckCard = (props) => {
  const { index } = props;
  const { potluck_name, location, date, time, organizer } = props.potluck;

  return (
    <div className="potluck-card">
      <h3 className="potluck-card__title">{potluck_name}</h3>
      <p className="potluck-card__description">Location: {location}</p>
      <p className="potluck-card__description">Date: {date}</p>
      <p className="potluck-card__description">Time: {time}</p>
      <Link to={`/potluck/view/${organizer}/${index}`}>View</Link>
    </div>
  );
};

export default PotluckCard;