import React from "react";
import { getPosts, graphcms } from "lib/graphcms";
import { GraphQLClient, gql } from "graphql-request";
import PostItems from "@/components/PostItems";


export async function getStaticProps() {
  const posts = (await getPosts() || [])
  return{
    props:{
      posts
    },
    revalidate: 10
  }
}

const AllPosts = ({ posts }) => {
  return (
    <div className="px-5 lg:px-0 mt-24 md:container">
      <h1 className="text-7xl">All Blog Posts</h1>
      <PostItems data={posts} />
    </div>
  );
};

export default AllPosts;
