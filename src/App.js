import './App.css';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // const [count, setCount] = useState(0);
  // dispatch 세팅
  // useSelector는 함수가 매개변수
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    //action은 단순한 객체형태 type키 필수, payload는 선택
    dispatch({ type: 'INCREMENT' });
    // setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
    </div>
  );
}

export default App;
