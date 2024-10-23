import '/src/components/todo-form/form.css'
const TodoForm = () => {
	return (
		<div className='form'>
			<input type='text' className='tex' placeholder='type...' />
			<input type='number' className='number' placeholder='' />
			<button className='button'>Add</button>
		</div>
	)
}
export default TodoForm
