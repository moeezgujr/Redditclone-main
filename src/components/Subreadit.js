import React from "react";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
export const Subreadit = ({
  isPreview = false,
  title,
  description,
  author,
  url,
  comments,
  id,
}) => {
  return (
    <div className="subreadit">
      <Card>
        <Link to={`/user/${author}`}>{`Posted by ${author}`}</Link>
        {isPreview ? (
          <h3 className="subreaditTitle" data-testid="Post">
            <Link data-testid="Post" to={`/Post/${id}`}>{title}</Link>
          </h3>
        ) : (
          <h1 className="subreaditTitle">r/{title}</h1>
        )}
        <a target="_blank" href={url}>
          {url}
        </a>
        <Link to={`/Post/${id}`}>{`Comments: ${comments}`}</Link>
      </Card>
    </div>
  );
};
