// import를 이용해서 nodejs에 설치된 패키지를 불러오거나 src디렉토리에 있는 js 파일도 불러올 수 있다.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

