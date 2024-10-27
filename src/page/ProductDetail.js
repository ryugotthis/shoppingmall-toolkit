import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let product = useSelector((state) => state.product.productDetailList);
  // const [product, setProduct] = useState(null);
  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };
  useEffect(() => {
    getProductDetail();
    console.log('product', product);
  }, []);
  // console.log('사이즈정보', product?.size);

  return (
    <div className="product-detail">
      <div className="img-box">
        <img src={product?.img} alt="product" />
      </div>
      <div className="detail-box">
        <h2 className="title">{product?.title}</h2>
        <p className="price">판매가 {product?.price}원</p>
        <label for="size">사이즈</label>
        <select className="size-option-box">
          <option>선택</option>
          {product?.size.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductDetail;
