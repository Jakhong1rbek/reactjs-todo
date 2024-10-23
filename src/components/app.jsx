import Filter from './filter/filter'
import FormList from './form-list/form-list'
import Task from './task/task'
import TodoForm from './todo-form/form'

function App() {
	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='card'>
					<Task />
					<TodoForm />
					<FormList />
					<Filter />
				</div>
				<img src='/earth.svg' alt='earth' />
			</div>
		</div>
	)
}

export default App
