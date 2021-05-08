import React from "react";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
const PostCard = ({ body,author }) => {
  return (
    <div className="postcard">
      <Card>
      <Link to={`/user/${author}`}><p className="commentbody">{author}</p></Link>
        <p className="commentbody">{body}</p>
      </Card>
    </div>
  );
};
export default PostCard;
