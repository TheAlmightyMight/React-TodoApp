import React,{useContext} from 'react';
import DataContext from '../context';
import styled from 'styled-components';
import { VscAdd } from "react-icons/vsc";

const Form = styled.form`
height:60px;
margin-bottom:40px;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
`

const InputInner = styled.input`
font-family: 'Josefin Sans', sans-serif;
width:100%;
margin-left:15px;
height:60px;
outline:none;
font-size:1.5em;
border:none;
text-indent:.6em;
`

const AddButton = styled.button`
width:32px;
height:32px;
margin-left:15px;
background-color:transparent;
border:none;
cursor:pointer;
`

function Input() {
    let {input, handleInputChange, handleSubmit} = useContext(DataContext)
  return (
      <>
      <Form className="form" onSubmit={(e) => handleSubmit(e)}>
        <AddButton><VscAdd size="2em"/></AddButton>
         <InputInner className="form-input" type="text" value={input} onChange={(e) => handleInputChange(e)}></InputInner>
      </Form>
      </>
  )
}

export default Input;