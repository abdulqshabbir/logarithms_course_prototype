import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import "./Card.css";

interface Props {
  title: string;
  content: string;
}

const Card = (props: Props) => {
  let { title, content } = props;
  return (
    <div className="card-container card">
      <header className="card-title">{title}</header>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
