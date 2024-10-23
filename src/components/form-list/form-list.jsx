import '/src/components/form-list/form-list.css'
const FormList = () => {
	return (
		<div className='form-list-items'>
			<div className='form-list-item'>
				<div className='item-info'>
					<span>12</span>
					<p>Buy Banana</p>
				</div>
				<div className='item-actions'>
					<span className='check'>&#10003;</span>
					<span className='times'>&times;</span>
				</div>
				{/* <div className='line'></div> */}
			</div>
			<div className='form-list-item active'>
				<div className='item-info'>
					<span>12</span>
					<p>Buy Banana</p>
				</div>
				<div className='item-actions'>
					<span className='check'>&#10003;</span>
					<span className='times'>&times;</span>
				</div>
			</div>
		</div>
	)
}
export default FormList
