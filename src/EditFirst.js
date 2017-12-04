import React from 'react';


const Edit = ({firstName, onChangeFirstName} ) => {
	return (
		<div>
			<label>
				First name:
				{' '}
				<input
					value={ firstName }
					onChange={onChangeFirstName}
				/>
			</label>
		</div>

	)
}


export default Edit;
