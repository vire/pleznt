import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import MenuIcon from 'react-icons/lib/fa/bars'
import BackIcon from 'react-icons/lib/fa/arrow-left'

const PageHeader = ({ pageName }) => (
  <div className="PageHeader">
    <span>
      <Link href="/home">
        <BackIcon />
      </Link>
    </span>
    <span>{pageName}</span>
    <span>
      <MenuIcon />
    </span>
    <style jsx>{`
      .PageHeader {
        padding: 0 10px;
        height: 50px;
        font-size: 24px;
        align-items: center;
        text-align: center;
        color: #ffffff;
        background: #2d2d2d;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .PageHeader__text {
        padding-top: '4px';
      }
    `}</style>
  </div>
)

PageHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default PageHeader
