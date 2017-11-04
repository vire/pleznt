import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'

const OverlayImg = ({ dummyUrl, realUrl, overlay, handleClick }) => (
  <div>
    {overlay && (
      <div
        role="presentation"
        onClick={handleClick}
        onKeyDown={handleClick}
        className="NavPage__overlay">
        <div className="NavPage__overlay-text">CLICK</div>
      </div>
    )}

    {overlay ? (
      <img alt="img" style={{ width: '100%' }} src={dummyUrl} />
    ) : (
      <img alt="img" style={{ width: '100%' }} src={realUrl} />
    )}
    <style jsx>{`
      .NavPage__overlay {
        width: 100%;
        background: rgba(150, 0, 255, 0.43);
        z-index: 1000;
        position: absolute;
        height: 100%;
      }

      .NavPage__overlay-text {
        position: relative;
        top: 40vh;
        text-align: center;
        font-size: 90px;
        font-weight: bold;
        color: white;
      }
    `}</style>
  </div>
)

OverlayImg.propTypes = {
  dummyUrl: PropTypes.string.isRequired,
  realUrl: PropTypes.string.isRequired,
  overlay: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}

class NavPage extends React.Component {
  state = {
    showOverlay: true,
  }
  handleClick = () => {
    this.setState({
      showOverlay: false,
    })
  }
  render() {
    const dummySrc = 'https://i.imgur.com/VY2vgSQ.jpg'
    const imgSrc = 'https://i.imgur.com/cW2HBu0.png'
    return (
      <Layout>
        <div className="NavPage__content" style={{ background: '#66e8d0', height: '100vh' }}>
          <OverlayImg
            overlay={this.state.showOverlay}
            handleClick={this.handleClick}
            dummyUrl={dummySrc}
            realUrl={imgSrc}
          />
        </div>
      </Layout>
    )
  }
}

export default NavPage
