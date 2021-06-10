// import react
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// define react component
const Homepage = () => {
  return(
    <Layout pageHeading='Home' pageTitle='HomePage'>
      <p>This is the homepage, children component</p>
      <StaticImage
        src='https://images.unsplash.com/photo-1576434795764-7e27901b7af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1264&q=80'
        alt='A Public Domain Pitbull'
      />
    </Layout>
    
  )
};

// export hompage comonent
export default Homepage;