import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! <b>{this.props.name}</b> 커밋 입니다.
      </div>
    );
  }
}

export default MyName;