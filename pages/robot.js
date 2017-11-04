import React from 'react'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const RobotPage = () => (
  <Layout>
    <PageHeader pageName="Robot" />
    <div className="RobotPage__content">!@#$%^ Kill all humans!</div>
    <style jsx>{`
      .RobotPage__content {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    `}</style>
  </Layout>
)

export default RobotPage
