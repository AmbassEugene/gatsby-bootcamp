import Layout from "../components/layouts"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
          }
        }
      }
    }
  `)

  const blogItems = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blogs</h1>
      <ol>
        {blogItems.map((blog, index) => (
          <li key={index}>
            <h3>{blog.node.frontmatter.title}</h3>
            <p>{blog.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
