import React, { useState } from 'react';
import axios from 'axios';

function VoucherCard() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div>
			<div className='section'>
				<input
					type='file'
					onChange={handleChange}
				/>
			</div>
			<div className='section'>
				<img src={file} />
			</div>
		</div>
	);
}

export default VoucherCard;
