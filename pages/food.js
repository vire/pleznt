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
            <button type="button" className="c-button c-button--block c-button--info">
              Order
            </button>
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
            <button type="button" className="c-button c-button--block c-button--info">
              Order
            </button>
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
            <button type="button" className="c-button c-button--block c-button--info">
              Request
            </button>
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
            <button type="button" className="c-button c-button--block c-button--info">
              Join
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .FoodPage__item {
          padding: 10px 0px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .FoodPage__amount-box {
          max-width: 90px;
        }

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
