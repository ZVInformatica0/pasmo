import React from 'react';
import VoucherCard from '../../components/VoucherCard';
import './VoucherHome.css';

function VoucherHome() {
	return (
		<div className='homepage'>
			<nav class='navbar background'>
				<ul class='nav-list'>
					<div class='logo'>
						<img src='https://i.ibb.co/LYDGB5s/logo-pasmo.png' />
					</div>
					<li>
						<a href='/Home'>Válidar voucher</a>
					</li>
					<li>
						<a href='/Create'>Crear Voucher</a>
					</li>
				</ul>

				<div class='rightNav'>
					<input
						type='text'
						name='search'
						id='search'
					/>
					<button class='btn btn-sm'>Search</button>
				</div>
			</nav>

			<section class='section'>
				<div class='box-main'>
					<input
						type='text'
						name='search'
						id='search'
					/>
					<button class='btn btn-sm'>Válidar</button>
				</div>
			</section>

			<section class='section'>
				<div class='box-main'>
					<VoucherCard />
				</div>
			</section>
			<section class='section'>
				<div class='box-main'></div>
			</section>

			<footer className='footer'>
				<p className='text-footer'>Copyright ©-All rights are reserved</p>
			</footer>
		</div>
	);
}

export default VoucherHome;
