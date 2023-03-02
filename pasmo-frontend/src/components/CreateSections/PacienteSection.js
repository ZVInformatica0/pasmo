import React from 'react';
import { FormControlLabel, Checkbox, Box } from '@material-ui/core';
import logo from '../../images/search.png';

function PacienteSection() {
	return (
		<section class='sectionn center'>
			<div class='box-main'>
				<form>
					<input
						type='text'
						name='name'
					/>

					<input
						type='submit'
						value='Buscar'></input>
				</form>
			</div>
		</section>
	);
}

export default PacienteSection;
