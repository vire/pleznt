import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const HumanPage = () => (
  <Layout>
    <PageHeader pageName="Human" />
    <div className="HumanPage__content">Love and help to all humans!</div>
    <style jsx>{`
      .HumanPage__content {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    `}</style>
  </Layout>
)

export default HumanPage
