import React from 'react';


const EditLast = ({lastName, onChangeLastName}) => {
	return (
		<label>
			Last name:
			{' '}
			<input
				value={ lastName }
				onChange={ onChangeLastName }
			/>
		</label>

	)

}


export default EditLast;
