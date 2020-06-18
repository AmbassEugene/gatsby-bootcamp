import Layout from "../components/layouts"
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "../styles/blog.module.scss"

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
    }
  `)

  const blogItems = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blogs</h1>
      <ol className={blogStyles.posts}>
        {blogItems.map((blog, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${blog.node.fields.slug}`}>
              <h3>{blog.node.frontmatter.title}</h3>
              <p>{blog.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
