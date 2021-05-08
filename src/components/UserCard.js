import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({
  title,
  commentCount,
  up,
  body,
  url,
}) => {
  return (
    <div className='user'>
      <Card>
        <h3 className="userName">
          <a href={url}>{title}</a>
        </h3>

        <p>{body}</p>
        <p className="userStats">
          <span className="userPostCount">Posts:{up}</span>
          {" | "}
          <span className="userCommentCount">Comments:{commentCount}</span>
        </p>
      </Card>
    </div>
  );
};
export default UserCard;
