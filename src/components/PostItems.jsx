import React from "react";
import PostItem from "./PostItem";

const PostItems = ({ data }) => {
  return (
    <div className=" flex flex-wrap gap-6">
      {data.map((item, idx) => (
        <PostItem data={item} key={idx} />
      ))}
    </div>
  );
};

export default PostItems;
