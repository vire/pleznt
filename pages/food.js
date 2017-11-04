import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const FoodPage = () => {
  return (
    <Layout>
      <PageHeader pageName={'Food'} />
      <div className="o-container o-container--xsmall">
        <div className="c-card c-card--accordion u-high">
          <input type="checkbox" id="accordion-1" />
          <label className="c-card__item" htmlFor="accordion-1">
            Order breakfast from <span style={{ textDecoration: 'underline' }}>Canteen</span>
          </label>
          <div className="c-card__item">
            <ul className="c-list c-list--unstyled">
              <li className="c-list__item FoodPage__item">
                <span role="img" aria-label="images">
                  {' '}
                  🍳🥓
                </span>
                <span>English breakfast</span>
                <div className="c-input-group c-input-group--rounded FoodPage__amount-box">
                  <button className="c-button c-button--brand">-</button>
                  <div className="o-field">
                    <input className="c-field" placeholder="0" type="number" />
                  </div>
                  <button className="c-button c-button--brand">+</button>
                </div>
              </li>
              <li className="c-list__item FoodPage__item">
                <span role="img" aria-label="images">
                  {' '}
                  🥐☕️
                </span>
                <span>Croissant + Coffee</span>
                <div className="c-input-group c-input-group--rounded FoodPage__amount-box">
                  <button className="c-button c-button--brand">-</button>
                  <div className="o-field">
                    <input className="c-field" placeholder="0" type="number" />
                  </div>
                  <button className="c-button c-button--brand">+</button>
                </div>
              </li>{' '}
              <li className="c-list__item FoodPage__item">
                <span role="img" aria-label="images">
                  {' '}
                  🍚🍓
                </span>
                <span>Porridge with fruits</span>
                <div className="c-input-group c-input-group--rounded FoodPage__amount-box">
                  <button className="c-button c-button--brand">-</button>
                  <div className="o-field">
                    <input className="c-field" placeholder="0" type="number" />
                  </div>
                  <button className="c-button c-button--brand">+</button>
                </div>
              </li>
            </ul>
            <div style={{ display: 'flex' }}>
              <label className="c-field c-field--choice">
                <input name="radios" type="radio" checked /> I will pickup
              </label>
              <label className="c-field c-field--choice">
                <input name="radios" type="radio" /> You deliver
              </label>
            </div>
            <div style={{ paddingTop: '10px' }} />
            <Link href="/thx">
              <button type="button" className="c-button c-button--block c-button--info">
                Order
              </button>
            </Link>
          </div>
          {/* 2nd section*/}
          <input type="checkbox" id="accordion-2" />
          <label className="c-card__item" htmlFor="accordion-2">
            Order snacks from <span style={{ textDecoration: 'underline' }}>Snack bar</span>
          </label>
          <div className="c-card__item">
            <ul className="c-list c-list--unstyled">
              <li className="c-list__item FoodPage__item">
                <span role="img" aria-label="images">
                  {' '}
                  🍎🍐
                </span>
                <span>Small fruit salad</span>
                <div className="c-input-group c-input-group--rounded FoodPage__amount-box">
                  <button className="c-button c-button--brand">-</button>
                  <div className="o-field">
                    <input className="c-field" placeholder="0" type="number" />
                  </div>
                  <button className="c-button c-button--brand">+</button>
                </div>
              </li>
              <li className="c-list__item FoodPage__item">
                <span role="img" aria-label="images">
                  {' '}
                  🍉🍇🍍
                </span>
                <span>Large fruit salad</span>
                <div className="c-input-group c-input-group--rounded FoodPage__amount-box">
                  <button className="c-button c-button--brand">-</button>
                  <div className="o-field">
                    <input className="c-field" placeholder="0" type="number" />
                  </div>
                  <button className="c-button c-button--brand">+</button>
                </div>
              </li>{' '}
              <li className="c-list__item FoodPage__item">
                <span role="img" aria-label="images">
                  {' '}
                  🍰
                </span>
                <span>Cake</span>
                <div className="c-input-group c-input-group--rounded FoodPage__amount-box">
                  <button className="c-button c-button--brand">-</button>
                  <div className="o-field">
                    <input className="c-field" placeholder="0" type="number" />
                  </div>
                  <button className="c-button c-button--brand">+</button>
                </div>
              </li>
            </ul>
            <div style={{ display: 'flex' }}>
              <label className="c-field c-field--choice">
                <input name="radios" type="radio" checked /> I will pickup
              </label>
              <label className="c-field c-field--choice">
                <input name="radios" type="radio" /> You deliver
              </label>
            </div>
            <div style={{ paddingTop: '10px' }} />
            <Link href="/thx">
              <button type="button" className="c-button c-button--block c-button--info">
                Order
              </button>
            </Link>
          </div>
          {/* 3rd section */}
          <input type="checkbox" id="accordion-3" />
          <label className="c-card__item" htmlFor="accordion-3">
            Request food from <span style={{ textDecoration: 'underline' }}>Damejidlo</span>
          </label>
          <div className="c-card__item">
            <small>Specify food type (pizza), amount, preferred restaurant, delivery time </small>
            <textarea className="c-field" placeholder="Type in here..." />
            <div style={{ paddingTop: '10px' }} />
            <Link href="/thx">
              <button type="button" className="c-button c-button--block c-button--info">
                Request
              </button>
            </Link>
          </div>
          {/* 4th section */}
          <input type="checkbox" id="accordion-4" />
          <label className="c-card__item" htmlFor="accordion-4">
            Join random lunch
          </label>
          <div className="c-card__item">
            <div style={{ textAlign: 'center' }}>
              <span role="img" aria-label="images" style={{ fontSize: '64px' }}>
                🎲
              </span>
            </div>
            <div style={{ paddingTop: '10px' }} />
            <Link href="/thx">
              <button type="button" className="c-button c-button--block c-button--info">
                Join
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .FoodPage__header {
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

        .FoodPage__item {
          padding: 10px 0px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .FoodPage__amount-box {
          max-width: 90px;
        }
      `}</style>
    </Layout>
  )
}

export default FoodPage
