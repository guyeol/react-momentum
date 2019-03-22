import React, { Component } from 'react';
import PropTypes from 'prop-types';
import preloadImg from '../utils/preloadImg';

/**
 * Photo Component
 * This component changes the background image after a period of time
 * @author [yeonjuan]
 */
class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      imgSrcs: props.imgs,
    };
    // preload images
    preloadImg(props.imgs, () => {
      console.log('Loaded');
    });
  }

  componentDidMount() {
    const chageDuration = this.props.duration;
    this.timer = setInterval(() => {
      const cur = this.state.curIdx;
      const next = cur >= this.state.imgSrcs.length - 1 ? 0 : cur + 1;
      this.setState({
        curIdx: next,
      });
    }, chageDuration);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const src = this.state.imgSrcs[this.state.curIdx];
    // TODO: css separation.
    const style = {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
    };
    return (
      <div style={style}>
      </div>
    );
  }
}

Photo.defaultProps = {
  duration: 3000,
  imgs: [],
};

Photo.propTypes = {
  duration: PropTypes.number,
  imgs: PropTypes.array,
};

export default Photo;
