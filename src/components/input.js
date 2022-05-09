import React,{useContext} from 'react';
import DataContext from '../context';
import styled from 'styled-components';

const Form = styled.form`
height:60px;
margin-bottom:40px;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
`

const InputInner = styled.input`
width:100%;
margin-left:15px;
height:60px;
outline:none;
font-size:1.5em;
border:none;
`

const AddButton = styled.button`
width:32px;
height:32px;
border-radius:50%;
margin-left:15px;
background-color:transparent;
border:1px solid hsl(236, 9%, 61%);
background-color:hsl(0, 0%, 98%);
`

function Input() {
    let {setInput, name, createTodo, input, setValue} = useContext(DataContext)
  return (
      <>
      <Form onSubmit={(e) => createTodo(name,e)}>
        <AddButton></AddButton>
         <InputInner type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => setValue(e)}></InputInner>
      </Form>
      </>
  )
}

export default Input