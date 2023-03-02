import React from 'react';
import { FormControlLabel, Checkbox, Box } from '@material-ui/core';

function LabsSection() {
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

	const lab = (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				ml: 3,
			}}>
			<FormControlLabel
				label='Prueba PrEP'
				control={
					<Checkbox
						style={{
							color: '#00e626',
						}}
						checked={checked[0]}
						onChange={handleChange2}
					/>
				}
			/>
			<FormControlLabel
				label='Creatinina'
				control={
					<Checkbox
						style={{
							color: '#00e626',
						}}
						checked={checked[1]}
						onChange={handleChange3}
					/>
				}
			/>
		</Box>
	);

	return (
		<section class='sectionn center'>
			<div class='box-mainn'>
				<FormControlLabel
					label='Laboratorio'
					control={
						<Checkbox
							style={{
								color: '#044400',
							}}
							checked={checked[0] && checked[1]}
							indeterminate={checked[0] !== checked[1]}
							onChange={handleChange1}
						/>
					}
				/>
				{lab}
			</div>
		</section>
	);
}

export default LabsSection;
