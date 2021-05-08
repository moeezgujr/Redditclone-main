import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { redditPostUrl } from "../constants/Url";
import { fetchFeeds } from "../services/Api";

const Post = ({}) => {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  const redditPostUrlUpdated = `${redditPostUrl}/comments/${id}.json`;
  useEffect(async () => {
    let data = await fetchFeeds(redditPostUrlUpdated);
    setPosts(data[1].data.children);
  }, []);

  return (
    <div>
      <Header />
      <h2>Comments</h2>
      {posts &&
        posts.map((comments) => (
          <PostCard body={comments.data.body} author={comments.data.author} />
        ))}
    </div>
  );
};

export default Post;
