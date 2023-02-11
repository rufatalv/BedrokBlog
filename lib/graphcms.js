import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldwqwo7y2wfy01rtbjvb90ds/master"
);

// const QUERY = gql`
//   {
//     posts {
//       id
//       title
//       slug
//       coverPhoto {
//         url
//       }
//       content {
//         html
//       }
//       category {
//         name
//         categoryName
//         catColor
//         catColorText
//       }
//       datePublished
//       minRead
//     }
//   }
// `;

export const getSluglist = async () => {
  const query = gql`
    query Slugs {
      posts {
        slug
      }
    } 
  `;

  const result = await graphcms.request(query);
 
  return result;
};
export const getPosts = async () => {
  const QUERY = gql`
    {
      posts {
        id
        title
        slug
        coverPhoto {
          url
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

  const result = await graphcms.request(QUERY);

  return result.posts;
};
export const getCategories = async () => {
  const query = gql`
    query Slugs {
      categories {
        slug
      }
    }
  `;

  const result = await graphcms.request(query);

  return result;
};
export const getCategoryPosts = async (category) => {
  const query = gql`
    query MyQuery($category: String!) {
      posts(where: { category: { name: $category } }) {
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
  const result = await graphcms.request(query, category);

  return result.posts;
};

export const getFeaturedPost = async () => {
  const query = gql`
  query getFeaturedPost() {
    posts(where: {isFeatured: true}) {
      id
          title
          slug
          coverPhoto {
            url
          }
          content {
            html
          }
          category {
            name
            categoryName
            catColor
            slug
            catColorText
          }
          datePublished
          minRead
    }
  }`;

  const result = await graphcms.request(query);

  return result.posts[0];
};
export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      coverPhoto {
        url
      }
      slug
        category{
        categoryName
      }
    }
  }
  `;
  const result = await graphcms.request(query);

  return result.posts;
};
