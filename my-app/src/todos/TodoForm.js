
import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


export default class TodoForm extends React.Component{
	render(){
		const {values, changeHandler, clickHandler, dayClickHandler } = this.props;
		return (
			<div>
				task : <input 
				 type='text'
				 value={values}
				 onChange = {changeHandler}
				/>
				<DayPicker onDayClick={dayClickHandler} />
        			
				<br/>
				 <button onClick={clickHandler}>
					add
				</button>
			</div>
		)
	}
}
// {status ? (
//           			<p>You clicked {status}</p>
//         			) : (
//           				<p>Please select a day</p>
//         		)}