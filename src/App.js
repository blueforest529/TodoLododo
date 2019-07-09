//import React from 'react';
//컴포넌트
//소프트웨어란 부품(인터페이스를 구현받은 클래스) 만 바꾸어 주었을시, 오류 없이 잘 작동 되는것 을 의미한다.
//<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
// src/App.js

import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;