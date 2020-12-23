import React from 'react';
import { Checkbox, Button } from 'antd';

export const ToDoItems = (pros) => 
{
    const {Item, onCheck, onRemove} = pros;
    const check = () => {
        onCheck(Item.id);
    }
    const remove = () => {
        onRemove(Item.id)
    }
    return (
        <li className = {'todo-Items'} key = {Item.id}>
            <Checkbox checked = {Item.checked} onChange = {check}> {Item.name} </Checkbox>
            <Button onClick = {remove}>Remove</Button>
        </li>
    )
}