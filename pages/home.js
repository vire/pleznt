import React from 'react'
import SearchIcon from 'react-icons/lib/fa/search'
import MenuIcon from 'react-icons/lib/fa/bars'

import Layout from '../components/Layout'

const data = [
  {
    label: 'Food',
    suggestions: [
      'Order breakfast pickup',
      'See available snacks',
      'Join random lunch',
      'MojeMana',
    ],
    icon: '🍳',
  },
  {
    label: 'Transport',
    suggestions: ['Parking sharing', 'Free rides', 'Parking payment', 'Order taxis'],
    icon: '🅿️',
  },
  {
    label: 'HR',
    suggestions: ['Make request'],
    icon: '❤️',
  },
  {
    label: 'Refocusing',
    suggestions: ['Check status', 'Find people', 'See activities', 'PowerNap'],
    icon: '🎮',
  },

  {
    label: 'Bookings',
    suggestions: ['Find and book quickly a meeting room'],
    icon: '📅',
  },
  {
    label: 'Sports',
    suggestions: ['Find sparring partner', 'Join team', 'Challenge'],
    icon: '🏋️‍',
  },
  {
    label: 'Parcels',
    suggestions: ['Notifications', 'Payments'],
    icon: '📦',
  },
  {
    label: 'Assistance',
    suggestions: ['Order flowers', 'Shopping lists', 'TODO list'],
    icon: '💐',
  },
]

const HomePage = () => (
  <Layout>
    <div className="HomePage">
      <div className="HomePage__header">
        <span>
          <SearchIcon />
        </span>
        <img className="HomePage__logo" alt="logo" src="/static/logo-white.png" />
        <span>
          <MenuIcon />
        </span>
      </div>
      <div className="o-container o-container--xsmall HomePage__content">
        {data.map(item => {
          return (
            <div className="HomePage__item" key={item}>
              <span className="HomePage__icon" role="img" aria-label="img">
                {item.icon}
              </span>
              <span className="HomePage__label">{item.label}</span>
            </div>
          )
        })}
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

export default HomePage
