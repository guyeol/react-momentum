import React, {Component} from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      imgSrcs: props.imgs
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
        const curIdx = this.state.curIdx;
        const nextIdx = curIdx >= this.state.imgSrcs.length - 1 ? 0 : curIdx + 1;
        this.setState({
          curIdx: nextIdx
        });
      }, 3000);
  }

  render() {
    const src = this.state.imgSrcs[this.state.curIdx];
    const style = {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center'
    };
    return (
      <div style={style}>
      </div>
    );
  }
}

export default Photo;
