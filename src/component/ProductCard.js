import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/product/${item.id}`);
	};

	return (
		<div className='product-card' onClick={showDetail}>
			<div className='image'>
				<img src={item?.img} />
			</div>
			<div>{item?.title}</div>
			<div>{item?.price} 원</div>
			<div>{item?.new == true ? 'New' : ''}</div>
		</div>
	);
};

export default ProductCard;
