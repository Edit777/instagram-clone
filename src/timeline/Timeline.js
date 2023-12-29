import React, { useState } from "react";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Post from "./post/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "rediana_",
      postImage: "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "cowboy",
      postImage: "https://pixlr.com/images/index/ai-image-generator-three.webp",
      likes: 72,
      timestamp: "1d",
    },
    {
      user: "paravoz",
      postImage: "https://pixlr.com/images/index/ai-image-generator-two.webp",
      likes: 134,
      timestamp: "14h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
