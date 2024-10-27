import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from './logo1.png';
import logo1 from '../imgs/logo2.png';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Navebar = () => {
  const menuList = [
    'All',
    'Outer',
    'Top',
    'dress',
    'Pants',
    'Sport',
    'Sale',
    '지속가능성',
  ];
  const authenticate = useSelector((state) => state.auth.authenticate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToLogin = () => {
    navigate('/login');
    // setAuthenticate(false);
  };
  const goTOLogout = () => {
    dispatch(authenticateAction.logout(authenticate));
  };
  const goToProduct = (menu) => {
    navigate(`/product?category=${menu.target.innerHTML}`);
    // console.log(
    //   'product clicked',
    //   menu.target.__reactProps$z5lyzy2y8ym.children
    // );
    console.log('product clicked', menu.target.innerHTML);
  };
  // const goToHome = () => {
  //   navigate('/');
  // };
  const search = (event) => {
    // console.log(event);
    // event.key == 'Enter' ? console.log('enter') : console.log('노');
    if (event.key === 'Enter') {
      let target = event.target.value;
      // url을 바꿔준다
      navigate(`/product?q=${target}`);
    }
    // 입력한 검색어를 읽어와서(js에서는 value속성을 사용했지만 react에서는 event 속성 활용)

    // console.log(target);
  };
  return (
    <div className="navebar">
      <div className="first-row">
        <div className="left"></div>
        <div className="middle logo">
          <img src={logo} alt="로고" onClick={() => navigate('/')} />
        </div>
        <div className="right">
          <div
            className="log-in"
            onClick={authenticate ? goTOLogout : goToLogin}
          >
            <FontAwesomeIcon icon={faUser} className="img-login" />
            <div>{authenticate ? '로그아웃' : '로그인'}</div>
          </div>
          <div className="like">
            <FontAwesomeIcon icon={faHeart} className="img-heart" />
            <div>즐겨찾기</div>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="to-right">
          <ul className="menu">
            {menuList.map((menu) => (
              <li onClick={(menu) => goToProduct(menu)}>{menu}</li>
            ))}
          </ul>
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
            {/* OnKeyPress가 더 이상 사용되지 않는다고 함*/}
            <input
              placeholder="검색"
              onKeyDown={(event) => search(event)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
