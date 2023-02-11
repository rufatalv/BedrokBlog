"use client";
import React, { useRef, useState } from "react";
import { graphcms } from "lib/graphcms";
import { GraphQLClient, gql } from "graphql-request";
import PostItems from "@/components/PostItems";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";

const query = gql`
  query PostSearch($title: String!) {
    posts(where: { title_contains: $title }) {
      slug
      title
      coverPhoto {
        url
      }
      category {
        catColor
        categoryName
      }
    }
  }
`;
const fetcher = (query) => graphcms.request(query, { title: searchTerm });

const SearchPage = () => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const response = await graphcms.request(query, { title: searchTerm });
    const data = await response.posts;
    await setPosts(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPosts();
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container px-5 lg:px-0">
      <div className="text-[40px] mt-6 md:mt-24 md:text-7xl">Search</div>
      <form
        className="flex items-center mb-10 mt-5 md:mb-16"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          className="flex border-[1px] border-neutral-700 rounded-[100px] w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-neutral-700"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
        />
      </form>
      {posts && <PostItems data={posts} />}
    </div>
  );
};

export default SearchPage;
