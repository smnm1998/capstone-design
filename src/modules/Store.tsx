import { createStore } from 'redux';
import rootReducer from './Reducers';

// 로컬 스토리지에서 darkMode 상태 가져오기
const savedDarkMode = localStorage.getItem('darkMode');
const initialState = {
  darkMode: savedDarkMode === 'true', // 문자열을 boolean 값으로 변환
};

const store = createStore(rootReducer, initialState);

export default store;
