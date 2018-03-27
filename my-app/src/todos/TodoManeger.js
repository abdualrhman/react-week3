import React from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';


export default class TodoManeger extends React.Component{
	constructor(props){
		super(props)
		this.id = 0;
		this.state = ({
			dateInputValue : undefined,
			inputValue : '',
			valueList : {},
		})
		this.InputChangeHandler = this.InputChangeHandler.bind(this)
		this.clickFunction = this.clickFunction.bind(this)
		this.checkFunc = this.checkFunc.bind(this)
		this.removeFunc = this.removeFunc.bind(this)
		this.dayPickFunc = this.dayPickFunc.bind(this)
	}

	InputChangeHandler(e){
		this.setState({
 		  inputValue : e.target.value
		});
	}
	clickFunction(){
		const {inputValue, valueList, dateInputValue} = this.state;
		const newId = `id${this.id++}`
		const item =  {text : inputValue, done: false, deadline : dateInputValue}
		const newList = {...valueList, [newId]: item }
		this.setState({
			valueList : newList
		}, console.log(valueList))
	}
	checkFunc(key){
		console.log('checked!')
		const {valueList} = this.state;
		const oldObj = valueList[key]
		const newObj = {...oldObj, done : !oldObj.done}
		const newValueList = {...valueList, [key]: newObj}
		this.setState({ valueList : newValueList}, ()=>{
			console.log(newObj)
		})		
	}
	removeFunc(key){
		const {valueList} = this.state;
		const target = valueList[key]
		const targetChange = {...target, text : '', deadline : ''}
		const targetList = {...valueList, [key] : targetChange}
		// delete targetList[key]
		this.setState({
			valueList : targetList
		},()=> {console.log(valueList)})
	}
	dayPickFunc(day){
		const stringDay = day.toLocaleDateString()
		this.setState({
			dateInputValue : stringDay
		}, ()=> {
			console.log(this.state.dateInputValue)
		})
	}
	render(){
		const {state : { valueList, dateInputValue}, InputChangeHandler, clickFunction, removeFunc, checkFunc, dayPickFunc} = this;
		return (
			<div>
				<TodoForm
				 changeHandler={InputChangeHandler}
				 clickHandler = {clickFunction}
				 dayClickHandler = {dayPickFunc}
				 status = {dateInputValue}
				/>
				<TodoList 
				todos = {valueList}
				checkHandler = {checkFunc}
				removeHandler = {removeFunc}
				/>
			</div>
		)
	}
}
