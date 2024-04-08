import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './modules/Store';
import './assets/styles/Darkmode.css'; // 이 CSS 파일에는 body 요소의 클래스명이 설정되어 있어야 합니다.
import Mainpage from './routes/Mainpage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Mainpage />
      </div>
    </Provider>
  );
};

export default App;
