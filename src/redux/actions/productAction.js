// 미들웨어 처리
// 함수를 return

function getProducts(searchQuery) {
  // 함수반환, 항상 2개의 매개변수, getState는 현재 state를 받아볼 수 있음
  return async (dispatch, getState) => {
    // let searchQuery = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/ryugotthis/shoppingmall-toolkit/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // setProductList(data);
    console.log('전체', data);
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = ` https://my-json-server.typicode.com/ryugotthis/shoppingmall-toolkit/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('여기여기여기여기여기', data);
    dispatch({ type: 'GET_PRODUCT_DETAIL_SUCCESS', payload: { data } });
  };
}

// 미들웨어 함수가 여러개 될 거라서
// 여러개의 함수를 하나의 객체에 담아서 리턴할 예정
export const productAction = { getProducts, getProductDetail };
