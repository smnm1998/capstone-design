import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './modules/Store';
import './assets/styles/Darkmode.css';
import Mainpage from './routes/Mainpage';
import Books from './routes/Books';
import Drama from './routes/Drama';
import Movie from './routes/Movie';
import Music from './routes/Music';
import Loading from './components/Loading'; // 로딩 컴포넌트 임포트
import { toggleDarkMode } from './modules/Actions';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 페이지 로드 시 저장된 다크 모드 상태를 가져와서 Redux 상태에 적용
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      store.dispatch(toggleDarkMode());
    }

    // 2초 후에 로딩 상태 변경
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // 로딩 중일 때 로딩 컴포넌트를 보여줌
  if (loading) {
    return (
      <Provider store={store}>
        <Loading />
      </Provider>
    );
  }

  // 로딩이 완료된 후에는 라우트를 렌더링
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/drama" element={<Drama />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/music" element={<Music />} />
            <Route path="/" element={<Mainpage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;