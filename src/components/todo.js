import React,{useContext, useState} from 'react';
import styled from 'styled-components';
import DataContext from '../context';
import img from '../images/icon-cross.svg';
import img1 from '../images/icon-check.svg';

const TodoWrapper = styled.div`
height:60px;
display:grid;
align-items:center;
grid-template-columns:50px 1fr 50px;
border-bottom: 1px solid black;
position: relative;

&:last-of-type{
  border:none;
}
`

const TodoPar = styled.p`
margin:0 15px;
color:${props => props.color};
`;

const ButtonRemove = styled.button`
width:20px;
aspect-ratio:1;
border:none;
background-color: transparent;
cursor:pointer;
background-image: url(${img});
background-repeat: no-repeat;
`;

const ButtonComplete = styled.button`
width:32px;
aspect-ratio:1;
margin-left:20px;
border:1px solid black;
border-radius:50%;
background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
`

const CheckImg = styled.div`
border-radius:50%;
background-image: url(${img1});
background-position: center center;
background-repeat: no-repeat;
position:absolute;
outline:none;
left:20px;
background-color:transparent;
width:32px;
aspect-ratio:1;
cursor:pointer;
`;

function Todo({todo}) {
  let {removeTodo, completeTodo} = useContext(DataContext);
  return (
    <TodoWrapper>
      <ButtonComplete></ButtonComplete>
      <TodoPar style={{textDecoration : todo.completed === false ? "none" : "line-through"}}>{todo.name}</TodoPar>
      <CheckImg onClick={() => completeTodo(todo.id)}/>
      <ButtonRemove onClick={() => removeTodo(todo.id)}></ButtonRemove>
    </TodoWrapper>
  )
}

export default Todo;