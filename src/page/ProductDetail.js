import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
	let { id } = useParams(); //id 파라미터 값(숫자) 받아오는 것
	const [product, setProduct] = useState(null);

	const getProductDetail = async () => {
		let url = `https://my-json-server.typicode.com/solmi1/zara/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		setProduct(data); //데이터 가져오기
	};

	useEffect(() => {
		getProductDetail();
	}, []);
	return (
		<Container>
			<Row className='product-detail'>
				{' '}
				{/* Row 한 줄 */}
				<Col className='product-img'>
					<img src={product?.img} /> {/* product가 있다면 img 보여줘 */}
				</Col>
				<Col className='product-description'>
					{/* <div className='new'>{product.new ? 'New product' : ''}</div> */}
					<div className='tit'>{product?.title}</div>
					<div className='price'>{product?.price} 원</div>

					<Dropdown>
						<Dropdown.Toggle variant='outline-dark' id='dropdown-basic'>
							Size Option
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{product?.size.length > 0 &&
								product.size.map((item) => (
									<Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
								))}
						</Dropdown.Menu>
					</Dropdown>
					<Button variant='success' className='add-button'>
						장바구니 추가
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetail;
