import React from "react";
import { graphcms, getCategories } from "lib/graphcms";
import { gql } from "graphql-request";
import PostItems from "@/components/PostItems";
const QUERY = gql`
  query MyQuery($category: String!) {
    posts(where: { category: { slug: $category } }) {
      title
      slug
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

export async function getStaticProps({ params }) {
  const category = params.category;
  const data = await graphcms.request(QUERY, { category });
  const posts = data.posts;
  return {
    props: {
      posts,
      category
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { categories } = await getCategories();
  return {
    paths: categories.map((post) => ({ params: { category: post.slug } })),
    fallback: false,
  };
}
const CategoryPage = ({ posts }, category) => {
  console.log(category);
  return (
    <div className="px-5 lg:px-0 mt-24 md:container">
      <h4 className="text-xl uppercase tracking-[0.15em] text-neutral-500">Category</h4>
      <h1 className="text-7xl capitalize">{posts[0].category.categoryName}</h1>
      <PostItems data={posts} />
    </div>
  );
};

export default CategoryPage;
