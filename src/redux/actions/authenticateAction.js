function login(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: 'LOGIN_SUCCESS', payload: { id, password } });
    // console.log('id,password', id, password);
  };
}
function logout(authenticate) {
  return (dispatch, getState) => {
    // 여기서는 payload를 주지 않아도 됨
    dispatch({ type: 'LOGOUT_SUCCESS' });

    // console.log('id,password', id, password);
  };
}

export const authenticateAction = { login, logout };
