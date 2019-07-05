//import React from 'react';
//컴포넌트
//소프트웨어란 부품(인터페이스를 구현받은 클래스) 만 바꾸어 주었을시, 오류 없이 잘 작동 되는것 을 의미한다.

// src/App.js
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName name="주말엔 리액트로 하루 개발 일기장을 만들어 볼거야 커밋" />
    );
  }
}

export default App;
