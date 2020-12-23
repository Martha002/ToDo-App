import React from 'react';
import { Form, Input, Button} from 'antd';


const  {Item}  = Form;
export const TodoForm = (props) => {
    const {onSubmit} = props;
    
    const finish = (values) => {
        console.log('these are the values')
        console.log(values)
        onSubmit(values.name, values.title, values.description)
    }

    const fieldsValidationMessage = "Name should be at least 3 characters!";
    const titlecapValidationmessage = "Title must begin with CAPS!";
    


    return(
        <Form className={'todo-form'} layout={'inline'} onFinish={finish}>
            
            <div className = {'nameInput'}>
                <Item name = {'name'} label="Name">
                <Input
                minLength = {3}
                validationMessage = {fieldsValidationMessage} 
                />
            </Item>
            </div>
            
            <div className = {'titleInput'}>
                <Item name = {'title'} label = "Title">
                <Input 
                minLength = {3}
                pattern = {"^[A-Z][A-Za-z]+"}
                validationMessage = {titlecapValidationmessage}
                />
            </Item>
            </div>

            <div >
                <Item name = {'description'} label = "Description">
                    <Input 
                    minLength = {3}
                    validationMessage = {fieldsValidationMessage}
                    />
                </Item>
            </div>
                
            <div className = {'hButton'}>
                
                <Item >
                   <Button htmlType = {'submit'}>Add</Button>
               </Item>
            </div>
            
        </Form>
    )     
}