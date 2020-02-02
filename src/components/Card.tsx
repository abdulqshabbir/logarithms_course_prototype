import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Card.css";

interface Props {
  title: string;
  content: string;
}

const Card = (props: Props) => {
  let { title, content } = props;
  let { url } = useRouteMatch();
  return (
    <Link to={`${url}/problem/${title}`}>
      <div className="card-container card">
        <header className="card-title">{title}</header>
        <p className="card-content">{content}</p>
      </div>
    </Link>
  );
};

export default Card;
