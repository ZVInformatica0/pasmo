import React from 'react';
import { FormControlLabel, Checkbox, Box, Button } from '@material-ui/core';
import LabsSection from '../../components/CreateSections/LabsSection';
import AspSection from '../../components/CreateSections/AspSection';
import AutoSection from '../../components/CreateSections/AutoSection';
import './VoucherCreate.css';
import PacienteSection from '../../components/CreateSections/PacienteSection';

function VoucherCreate() {
	const [checked, setChecked] = React.useState([true, false]);
	const handleChange1 = (event) => {
		setChecked([event.target.checked, event.target.checked]);
	};

	const handleChange2 = (event) => {
		setChecked([event.target.checked, checked[1]]);
	};

	const handleChange3 = (event) => {
		setChecked([checked[0], event.target.checked]);
	};

	const [checked1, setChecked1] = React.useState([true, false]);
	const handleChangeAsp1 = (event) => {
		setChecked1([event.target.checked1, event.target.checked1]);
	};

	const handleChangeAsp2 = (event) => {
		setChecked1([event.target.checked1, checked1[1]]);
	};

	const handleChangeAsp3 = (event) => {
		setChecked([checked1[0], event.target.checked1]);
	};

	const lab = (
		<Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
			<FormControlLabel
				label='Prueba PrEP'
				control={
					<Checkbox
						checked={checked[0]}
						onChange={handleChange2}
					/>
				}
			/>
			<FormControlLabel
				label='Creatinina'
				control={
					<Checkbox
						checked={checked[1]}
						onChange={handleChange3}
					/>
				}
			/>
		</Box>
	);

	const asp = (
		<Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
			<FormControlLabel
				label='Prueba'
				control={
					<Checkbox
						checked={checked1[0]}
						onChange={handleChangeAsp2}
					/>
				}
			/>
			<FormControlLabel
				label='Prueba DÚO'
				control={
					<Checkbox
						checked={checked1[1]}
						onChange={handleChangeAsp3}
					/>
				}
			/>
		</Box>
	);

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
			<h4 className='center'>Crear un voucher</h4>

			<section class='sectionpfs2'>
				<div class='box-main'>
					<fieldset>
						<legend>Paciente</legend>

						<PacienteSection />
					</fieldset>
				</div>
			</section>
			<div className='marginbot'></div>

			<section class='sectionpfs2'>
				<div class='box-main'>
					<fieldset>
						<legend>Tipo de voucher</legend>
						<div className='cajita'>
							<LabsSection />
						</div>
						<div className='cajita'>
							<AspSection />
						</div>
						<div className='cajita'>
							<AutoSection />
						</div>
					</fieldset>
				</div>
			</section>

			<div className='marginbot'></div>

			<section class='sectionpfs2'>
				<div class='box-main'>
					<fieldset>
						<Button variant='contained'>Generar Voucher</Button>
					</fieldset>
				</div>
			</section>

			<footer className='footer'>
				<p className='text-footer'>Copyright ©-All rights are reserved</p>
			</footer>
		</div>
	);
}

export default VoucherCreate;
