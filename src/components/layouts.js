import "../styles/index.scss"

import Footer from "./Footer"
import NavMenu from "./header"
import React from "react"
import layoutStyles from "../styles/layouts.module.scss"

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <NavMenu />
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout
