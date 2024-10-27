import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
// 객체로 반환한건 객체형태로 받아야 함
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  // const [productList, setProductList] = useState(null);
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값', searchQuery);
    // 미들웨어로 거쳐서 리듀서에 가게 됨
    // 미들웨어로 dispatch 보내는 것
    dispatch(productAction.getProducts(searchQuery));
  };

  // const getProducts = async () => {
  //   let searchQuery = query.get('q') || '';
  //   console.log('쿼리값', searchQuery);
  //   let url = `https://my-json-server.typicode.com/ryugotthis/shoppingmall/products?q=${searchQuery}`;
  //   // let url = `http://localhost:5000/products`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log('data?', data);
  //   setProductList(data);
  //   console.log('list', productList);
  // };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="product-all">
      <Container>
        <Row>
          {productList?.map((menu, index) => (
            <Col lg={3} className="margin-item">
              <ProductCard item={menu} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
