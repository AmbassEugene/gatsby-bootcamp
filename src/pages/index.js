import Layout from "../components/layouts"
import { Link } from "gatsby"
import React from "react"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello and Welcome</h1>
      <h4>I am Eugene</h4>
      <p>
        Need a developer? <Link to="/contact">contact me</Link>{" "}
      </p>
    </Layout>
  )
}

export default IndexPage
