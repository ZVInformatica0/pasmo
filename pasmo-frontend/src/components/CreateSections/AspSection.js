import React from 'react';
import { FormControlLabel, Checkbox, Box } from '@material-ui/core';

function AspSection() {
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

	const asp = (
		<Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
			<FormControlLabel
				label='Prueba'
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
				label='Prueba DÚO'
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
					label='ASP'
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
				{asp}
			</div>
		</section>
	);
}

export default AspSection;
