import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import MyName from './MyName' ;
=======
import MyName from './MyName';
>>>>>>> 0d7e3cecbfdd07b0b5d445e08e784d14e4ac5cdd
//내가 만든 컴포넌트 불러올때
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// index.html의 root를 랜더링 해서 불러옴

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
