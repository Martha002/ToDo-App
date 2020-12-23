import React, { useState } from 'react';
import { Card, Divider, Button} from 'antd';
import { ToDoItems } from './ToDoItems';
import {TodoForm} from './ToDoForm';
import { format } from 'date-fns';

export const ToDo = () => {

    const [todos, setTodos] = useState([
        {id: 1, name: 'Todo 1', title:'eating',description:'pizza',checked:false,time:((format(Date.now(),'dd.MM.yyyy -hh:mm')))},
        {id: 2, name: 'Todo 2', title:'writing code',description:'hello world', checked: false,time:((format(Date.now(),'dd.MM.yyyy -hh:mm')))}
    ]);

    const aButton = () => {
        return(
            <Button onClick = {removeAllChecked}>
            Remove checked items
            </Button>
        )
    }

    const [ids, setIds] = useState(10);

    const onCheck = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const todo = todos[index];
        
        todo.checked = !todo.checked;
        setTodos([...todos]);
    }
    const onRemove = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        setTodos([...todos]);
    }

    const removeAllChecked = () => {
        var newArray = todos.map( (todo) => {return todo.checked === false;})
        console.log(newArray)
        setTodos([...newArray])
    }
    

    const onSubmit = (name,title,description)=>{
        console.log(name,title,description)
        const todo = {
            id: ids,
            name,
            title,
            time:((format(Date.now(),'dd.MM.yyyy -hh:mm'))),
            description, 
            checked: false
        };

        setTodos([...todos, todo]);
        setIds (ids +1);
    }

    
    const tasksundone = () =>{
        var countUnchecked = 0;
         for (let i = 0; i < todos.length; i++){
             if (todos[i].checked === false){
                countUnchecked++;      
             }
         }
         console.log(countUnchecked)
         return countUnchecked;
     }

    const renderedItems = (todos) => {
     
        return (
            <ul className = {'todo-List'}>
                {
                    todos.map(todo => {
                        return (<ToDoItems Item ={todo} onCheck = {onCheck} onRemove ={onRemove} />)
                    })
                }
            </ul>
        )
    }
    return(
        <Card title = {'My To-Do List'}>
            <TodoForm onSubmit={onSubmit}/>
            <Divider/>
            { 
               renderedItems(todos)
            }
            <Divider/>
            {aButton()}
            <Divider/>
            amount of Undone tasks: {tasksundone()}
        </Card>
    );
}