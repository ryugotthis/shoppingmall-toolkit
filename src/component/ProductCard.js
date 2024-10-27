import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ item, key }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/item/${item.id}`);
    console.log('네비게이트실행');
  };
  return (
    <div className="productcard" onClick={showDetail}>
      <img
        src={item?.img}
        width="inherit"
        className="img-fluid"
        alt="card-img"
      />
      <div>{item ? item.new ? <p className="new">new</p> : '' : ''}</div>
      <div>{item ? (item.choice ? 'conscious choice' : '') : ''}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
    </div>
  );
};

export default ProductCard;
