import React, { useEffect, useState } from "react";
import { Subreadit } from "../components/Subreadit";
import Header from "../components/Header";
import { redditURL } from "../constants/Url";
import { fetchFeeds } from "../services/Api";
import Skeleton from '@yisheng90/react-loading';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    let data = await fetchFeeds(redditURL);
    setArticles(data.data.children);
  }, []);
  return (
    <div className="homePage">
      <Header />
      <h2>Popular Subreadits</h2>
        <div className="subreaditsSection">

          {articles?articles.map((subreadit) => {
            return (
                <Subreadit
                  key={subreadit.data.id}
                  isPreview
                  title={subreadit.data.title}
                  id={subreadit.data.id}
                  description={subreadit.data.description}
                  url={subreadit.data.url}
                  author={subreadit.data.author}
                  comments={subreadit.data.num_comments}
                />
            );
          }):     <Skeleton width={250} row={6} />
        }
        </div>

    
    </div>
  );
};
export default HomePage;
