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
    fallback: "blocking",
  };
}
const PostDetails = ({ post }) => {
  return (
    <div className="container px-5 lg:px-0 lg:mt-20 mt-[40px] font-display">
      <div>
        <h1 className="sm:text-5xl md:text-7xl text-[32px] mb-10 md:mb-12 leading-10 md:leading-[90px]">
          {post.title}
        </h1>
        <div className="overflow-hidden">
          <Image
            src={post.coverPhoto.url}
            className="w-auto h-auto md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[500px] rounded-[5px] md:rounded-my object-fill"
            alt="ss"
            width={1000}
            height={500}
          />
        </div>
      </div>
      <div className="prose mx-auto w-[700px]" dangerouslySetInnerHTML={{__html: post.content.html}}>
          
      </div>
    </div>
  );
};

export default PostDetails;
