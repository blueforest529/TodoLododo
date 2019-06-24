//import React from 'react';
//컴포넌트
//소프트웨어란 부품(인터페이스를 구현받은 클래스) 만 바꾸어 주었을시, 오류 없이 잘 작동 되는것 을 의미한다.

// src/App.js
import React, { Component } from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyName;
