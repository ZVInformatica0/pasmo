import React from 'react';
import { FormControlLabel, Checkbox, Box } from '@material-ui/core';

function AutoSection() {
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

	const handleChange4 = (event) => {
		setChecked([checked[0], event.target.checked]);
	};

	const auto = (
		<Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
			<FormControlLabel
				label='PASMO'
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
				label='ONG'
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
			<FormControlLabel
				label='DELIVERY'
				control={
					<Checkbox
						style={{
							color: '#00e626',
						}}
						checked={checked[1]}
						onChange={handleChange4}
					/>
				}
			/>
		</Box>
	);

	return (
		<section class='sectionn center'>
			<div class='box-mainn'>
				<FormControlLabel
					label='Auto Prueba'
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
				{auto}
			</div>
		</section>
	);
}

export default AutoSection;
