import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import MyName from './MyName' ;
=======
import MyName from './MyName';
>>>>>>> 0d7e3cecbfdd07b0b5d445e08e784d14e4ac5cdd
//���� ���� ������Ʈ �ҷ��ö�
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// index.html�� root�� ������ �ؼ� �ҷ���

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
