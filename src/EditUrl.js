import React from 'react';

const EditUrl = ({ profileImageURL, chosenNumb, onChangeUrlField}) => {
	return (<div>
		<label>
			Choose a number to see a different image. {' '}
			<input value={chosenNumb} onChange={onChangeUrlField}/>
		</label>
	</div>)

}

export default EditUrl;
