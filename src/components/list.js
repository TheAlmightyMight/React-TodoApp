import React,{useContext,useState} from 'react';
import Todo from './todo'
import DataContext from '../context';
import styled from 'styled-components';

const ListStyled = styled.div`
border: 1px solid  hsl(233, 11%, 84%);
min-height:60px;
border-radius:5px;
`;

function List({isActiveVisible, isVisible, isCompletedVisible}) {
    let {todos, completedTodos, activeTodos} = useContext(DataContext);
  return (
    <ListStyled className="list">
        {isVisible && todos.map(todo => {
          return <Todo todo={todo} key={todo.id}/>;
        })}

        {isCompletedVisible && completedTodos.map(todo => {
          return <Todo todo={todo} key={todo.id}/>;
        })}

        {isActiveVisible && activeTodos.map(todo => {
          return <Todo todo={todo} key={todo.id}/>;
        })}
    </ListStyled>
  );
}

export default List;