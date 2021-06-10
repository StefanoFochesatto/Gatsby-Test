import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const about = () => {
    return (
        <Layout pageHeading='About' pageTitle='AboutPage'>
        <p>This is the about page children component</p>
      </Layout>
    )
};

export default about;