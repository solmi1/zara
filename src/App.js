import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './component/Navbar';
import Main from './page/Main';
import Login from './page/Login';
import ProductAll from './page/ProductAll';

import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인페이지, 상품상세페이지
//1-1. 네비게이션바 (메뉴)
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있음
//3. 로그인 버튼을 누르면 로그인 페이지 노출
//4. 상품디테일 누를시, 로그인 안되어있을 시 로그인페이지 노출
//5. 로그인이 되어있을시엔 상품 디테일 페이지 볼 수 있음
//6. 로그아웃 버튼 클릭하면 로그아웃 됨
//7. 로그아웃되면 상품 디테일 볼 수 없음, 다시 로그인 페이지 노출
//8. 로그인시 로그아웃 버튼, 로그아웃시 로그인 버튼 노출
//9. 상품검색기능
function App() {
	const [authenticate, setAuthenticate] = useState(false); //true면 로그인이 된 상태, false면 로그아웃상태
	useEffect(() => {}, [authenticate]);

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<ProductAll />} />
				<Route
					path='/login'
					element={<Login setAuthenticate={setAuthenticate} />}
				/>
				<Route path='/product' element={<ProductAll />} />
				<Route
					path='/product/:id'
					element={<PrivateRoute authenticate={authenticate} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
