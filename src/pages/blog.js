import Layout from "../components/layouts"
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "../styles/blog.module.scss"
import { clearConfigCache } from "prettier"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const blogItems = data.allMarkdownRemark.edges
  const contentfulItems = data.allContentfulBlogPost.edges
  console.log(blogItems)

  return (
    <Layout>
      <h1>Blogs</h1>
      <ol className={blogStyles.posts}>
        {blogItems.map((blog, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${blog.node.slug}`}>
              <h3>{blog.node.title}</h3>
              <p>{blog.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>

      <ol className={blogStyles.posts}>
        {contentfulItems.map((blog, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${blog.node.slug}`}>
              <h3>{blog.node.title}</h3>
              <p>{blog.node.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
