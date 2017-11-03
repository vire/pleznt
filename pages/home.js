import React from 'react'
import SearchIcon from 'react-icons/lib/fa/search'
import MenuIcon from 'react-icons/lib/fa/bars'

import Layout from '../components/Layout'

const data = [
  {
    label: 'Breakfast',
    icon: '🍳',
  },
  {
    label: 'Fruits',
    icon: '🍉',
  },
  {
    label: 'Refocusing',
    icon: '🎮',
  },
  {
    label: 'Meetings',
    icon: '📅',
  },
  {
    label: 'Parcels',
    icon: '📦',
  },
  {
    label: 'Parking',
    icon: '🅿️',
  },
  {
    label: 'Relax',
    icon: '💤',
  },
  {
    label: 'Shopping',
    icon: '🛒',
  },
]

const HomePage = () => (
  <Layout>
    <div className="HomePage">
      <div className="HomePage__header">
        <span>
          <SearchIcon />
        </span>
        <span>⧓</span>
        <span>
          <MenuIcon />
        </span>
      </div>
      <div className="HomePage__content">
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

      .HomePage__icon {
        font-size: 64px;
      }

      .HomePage__label {
        font-weight: 100;
        font-style: italic;
        border-bottom: 1px solid rgb(224, 221, 221);
      }

      .HomePage__header {
        height: 50px;
        font-size: 24px;
        text-align: center;
        color: #ffffff;
        padding: 0 5px;
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
