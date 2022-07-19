import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
	const [productList, setProductList] = useState([]);
	const [query, setQuery] = useSearchParams(); //내가 원하는 쿼리의 값을 읽어옴
	const getProducts = async () => {
		let searchQuery = query.get('q') || '';

		let url = `https://my-json-server.typicode.com/solmi1/zara/products?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
	};

	useEffect(() => {
		//useEffect는 비어있는 배열을 쓰면 맨 처음 프로젝트 시작 후에 딱 한번만 호출됨.
		getProducts();
	}, [query]); //배열에 query를 넣어주면 query를 감시하면서 query 값이 바뀔때마다 ui 값이 바뀜

	return (
		<div>
			<Container>
				<Row>
					{productList.map((item) => (
						<Col lg={3}>
							<ProductCard item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;
