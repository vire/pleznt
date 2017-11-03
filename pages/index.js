import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <div className="IndexPage">
      <div className="IndexPage__logo">
        <Link href="/home">
          <img alt="logo" style={{ boxShadow: '' }} src="/static/logo.png" />
        </Link>
      </div>
    </div>
    <style jsx>{`
      .IndexPage {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .IndexPage__logo img {
        box-shadow: 1px 3px 7px 0px rgba(0, 0, 0, 0.25);
      }
    `}</style>
  </Layout>
)

export default IndexPage
