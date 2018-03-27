import React from 'react';
import '../style.css'

export default class TodoList extends React.Component{
	render(){
		const {todos, removeHandler, checkHandler} = this.props;
		const keyArr = Object.keys(todos);
		return (
			<div>
				<ul>
					{
					keyArr.map((index)=>{
						const todo = todos[index]
						return (
							<li key={index}>
								<span
								 className = {todo.done ? 
								 	'Checked' : 'Unchecked'}>
									{todo.deadline}:  {todo.text}
								</span>
								<input type='checkbox'
								 checked={todo.done}
								 onChange={()=>{
								 	checkHandler(index)
								 }}
								 />

								<button className = 'removeButton'
								onClick = {()=>{
									removeHandler(index)
								}}
								>
								remove
								</button>
							</li>
						);
					})
					}	
				</ul>
			</div>
		);
	}
}

	// <button className = 'removeButton'
								// onClick = {removeHandler}
								// >
								// remove
								// </button>

