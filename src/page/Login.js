import React, { useState } from 'react';
// import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = () => {
  // console.log('status:', authenticate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const authenticate = useSelector((state) => state.auth.authenticate);
  const LoginUser = (event) => {
    // 새로고침 막기
    event.preventDefault();
    // setAuthenticate(true);
    // navigate('/product');
    dispatch(authenticateAction.login(id, password));
    console.log('로그인전달끝');
    navigate('/product');
  };
  return (
    <div className="login">
      <div className="login-box">
        <h2>Log in</h2>

        {authenticate ? (
          <form onSubmit={(event) => LoginUser(event)}>
            {/* 반드시 필요하지는 않음, true일 경우 전체상품 페이지로 넘어가기때문에  */}
            <input type="submit" value="Logout" />
          </form>
        ) : (
          <form onSubmit={(event) => LoginUser(event)}>
            <input
              type="text"
              placeholder="id"
              onChange={(event) => setId(event.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <label for="remember-check">
              <input type="checkbox" />
              아이디 저장하기
            </label>
            <input type="submit" value="Login" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
