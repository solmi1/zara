import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
	const menuList = ['WOMAN', 'MAN', 'KIDS', 'BEAUTY'];

	const navigate = useNavigate();

	// const goToLogin = () => {
	// 	navigate('/login');
	// };

	const goToMain = () => {
		navigate('/');
	};

	const search = (event) => {
		if (event.key === 'Enter') {
			//입력한 검색어를 읽어와서
			let keyword = event.target.value; //인풋(이벤트) 안에 있는 값 읽어오기

			//url 변경(검색된 키워드의 url로)
			navigate(`/?q=${keyword}`);
		}
	};

	return (
		<div>
			{/* <div className='login-button' onClick={goToLogin}>
				<FontAwesomeIcon icon={faUser} />
				<div> */}
			{authenticate ? (
				<div onClick={() => setAuthenticate(false)}>
					<FontAwesomeIcon icon={faUser} />
					<span>로그아웃</span>
				</div>
			) : (
				<div onClick={() => navigate('/login')}>
					<FontAwesomeIcon icon={faUser} />
					<span>로그인</span>
				</div>
			)}
			{/* </div> */}
			{/* </div> */}
			<div className='logo' onClick={goToMain}>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg'
					alt='zara-logo'
				/>
			</div>

			<ul className='menu-list'>
				{menuList.map((menu) => (
					<li>{menu}</li>
				))}
			</ul>

			<div className='search'>
				<input type='text' onKeyPress={(event) => search(event)} />
				<FontAwesomeIcon icon={faSearch} />
			</div>
		</div>
	);
};

export default Navbar;
