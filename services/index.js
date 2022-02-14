import { request, gql } from 'graphql-request'

const graphQLApiKey =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ||
  'https://api-ap-south-1.graphcms.com/v2/ckzawsrow1yuf01z560drfmoo/master'

// Get All Categories Data
export const getCategories = async () => {
  const query = gql`
    query Categories {
      categories {
        name
        slug
      }
    }
  `
  const result = await request(graphQLApiKey, query)

  return result.categories
}

// Get All Home Page Posts Data
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              photo {
                url
              }
            }
            createdAt
            excerpt
            featureImage {
              url
            }
            title
            slug
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphQLApiKey, query)
  return result.postsConnection.edges
}
// Get Recent Post data
export const getRecentPosts = async () => {
  const query = gql`
    query RecentPosts {
      posts(orderBy: id_ASC, first: 3) {
        createdAt
        title
        slug
        featureImage {
          url
        }
      }
    }
  `
  const result = await request(graphQLApiKey, query)

  return result.posts
}
// Get Post Details Data
export const getPostDetails = async (slug) => {
  const query = gql`
    query PostDetail($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featureImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `
  const result = await request(graphQLApiKey, query, { slug })
  return result.post
}
// Get Data of Similar Posts
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featureImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphQLApiKey, query, { slug, categories })

  return result.posts
}
// Get Category Posts data
export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featureImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphQLApiKey, query, { slug })

  return result.postsConnection.edges
}
