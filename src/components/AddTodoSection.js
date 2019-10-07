import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const FormSection = styled.div`
    background: #eee;
    height: auto;
    padding: 30px 0
`;

const Heading = styled.h5`
    text-align: center;
    font-weight: bold
`;

const Input = styled.input`
    padding: 6px;
    border: none;
    width: 100%;
    margin: 20px auto;
    
    &::placeholder{opacity: 0.7; font-size: 0.9em}
`;

const Button = styled.button`
    background: ${props => props.isButtonActive ? '#00baba' : 'gray'};
    padding: 3px 10px;
    color: white;
    box-shadow: ${props => props.isButtonActive ? '3px 3px 10px 2px #aaa' : ''};
    border: none;
    transition: 0.16s all;
    
    &:hover,
    &:active{box-shadow: ${props => props.isButtonActive ? '3px 3px 10px 1px #aaa' : ''};
    
    &:active{box-shadow: none !important;}
`

const AddTodoSection = ({addTodo, todoInputText, isEditingTodo, saveEdit}) => {

   const [todoText, setTodoText] = useState('');
    // todoInputText is passed from App.js down to components
    // this was implemented when I decided to add feature of editing todos
    // I needed a global state, as the editTodo function (which takes in the edited todo's text) is passed down to a sibling component

    const [isButtonActive, setIsButtonActive] = useState(false);

    const btnDisabled = isButtonActive ? false : true;
    const btnText = !isEditingTodo ? 'Add New Todo' : 'Save Edit'

    useEffect(() => {
        if(todoText && todoText.length) {
            setIsButtonActive(true)
        } else{
            setIsButtonActive(false)
        }
    }, [todoText]);

    useEffect(() => {
        setTodoText(todoInputText)
    }, [todoInputText]);

    const handleChange = (text) => {
        setTodoText(text)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditingTodo){
            saveEdit(todoText);
            setTodoText('');
            return
        }
        addTodo(todoText);
        setTodoText('')
    };


    return(
        <FormSection>
           <div className="container">
               <Heading>Add Todos</Heading>
               <form onSubmit={handleSubmit}>
                   <Input type='text' placeholder='What have you got planned?' value={todoText} onChange={(e) => handleChange(e.target.value)}/>
                   <Button data-testid='add-button' type='submit' disabled={btnDisabled} isButtonActive={isButtonActive} >{btnText}</Button>
               </form>
           </div>
        </FormSection>
    )
};

export default AddTodoSection