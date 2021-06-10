// import react
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


// define react component
const Homepage = () => {
  return(
    <Layout pageHeading='Home' pageTitle='HomePage'>
      <p>This is the homepage, children component</p>
    </Layout>
    
  )
};

// export hompage comonent
export default Homepage;