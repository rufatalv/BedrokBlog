import React from "react";
import { getSluglist, graphcms } from "lib/graphcms";
import { gql } from "graphql-request";
import Image from "next/image";

const QUERY = gql`
  query ($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      coverPhoto {
        url
        height
        width
      }
      content {
        html
      }
      category {
        name
        categoryName
        catColor
        catColorText
      }
      datePublished
      minRead
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { posts } = await getSluglist();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
const PostDetails = ({ post }) => {
  return (
    <main className="container mt-20 font-display">
      <h1 className="sm:text-5xl md:text-7xl text-[32px] mb-10 md:mb-12 leading-10 md:leading-[90px]">{post.title}</h1>
      <div>
        <img
          className="object-cover h-[auto] md:h-[450px] rounded-[5px] md:rounded-[20px] md:w-[1000px] w-[335px]"
          src={post.coverPhoto.url}
        />
      </div>
    </main>
  );
};

export default PostDetails;
