import React from 'react'
import Link from 'next/link'
import MenuIcon from 'react-icons/lib/fa/bars'
import BackIcon from 'react-icons/lib/fa/arrow-left'

import Layout from '../components/Layout'

const FoodPage = () => {
  return (
    <Layout>
      <div className="HomePage__header">
        <span>
          <Link href="/home">
            <BackIcon />
          </Link>
        </span>
        <div style={{ paddingTop: '4px' }}>Food</div>
        <span>
          <MenuIcon />
        </span>
      </div>
      <div className="o-container o-container--xsmall">
        <div className="c-card c-card--accordion u-high">
          <input type="checkbox" id="accordion-1" />
          <label className="c-card__item" htmlFor="accordion-1">
            Order breakfast - Cantina
          </label>
          <div className="c-card__item">
            Pane 1
            <p className="c-paragraph">This is an example paragraph</p>
          </div>
          <input type="checkbox" id="accordion-2" />
          <label className="c-card__item" htmlFor="accordion-2">
            Order some snacks - Buffet
          </label>
          <div className="c-card__item">
            Pane 2
            <p className="c-paragraph">This is another example paragraph</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .HomePage__item {
          width: 140px;
          text-align: center;
          display: flex;
          margin: 10px;
          flex-direction: column;
        }

        .HomePage__logo {
          width: 50px;
          height: 50px;
        }

        .HomePage__icon {
          background: white;
          border-radius: 20px;
          font-size: 64px;
        }

        .HomePage__label {
          border-top: 1px solid #f3f3f3;
          border-bottom: 1px solid #f3f3f3;
          font-weight: 100;
          font-size: 11px;
        }

        .HomePage__header {
          padding: 0 10px;
          height: 50px;
          font-size: 24px;
          text-align: center;
          color: #ffffff;
          background: #2d2d2d;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .HomePage__content {
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}</style>
    </Layout>
  )
}

export default FoodPage
