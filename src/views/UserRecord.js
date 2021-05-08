import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import { redditUserUrl } from "../constants/Url";
import { fetchFeeds } from "../services/Api";

const UserRecord = ({}) => {
  const [user, setUser] = useState([]);
  let { author } = useParams();
  const redditUrl = `${redditUserUrl}/${author}.json`;
  useEffect(async () => {
    let data = await fetchFeeds(redditUrl);
    setUser(data.data.children);
  }, []);

  return (
    <div>
      <Header />
      <h2>User Activities</h2>
      {user &&
        user.map((user) => {
          return (
            <UserCard
              commentCount={user.data.num_comments}
              up={user.data.ups}
              url={user.data.link_permalink}
              body={user.data.body}
              title={user.data.link_title}
            />
          );
        })}
    </div>
  );
};

export default UserRecord;
