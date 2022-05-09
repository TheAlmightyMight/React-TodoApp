import React,{useContext} from 'react';
import Todo from './todo'
import DataContext from '../context';
import styled from 'styled-components';

const ListStyled = styled.div`
background-color:hsl(0, 0%, 98%);
`;

function List() {
    let {todos, checkTodo} = useContext(DataContext);
  return (
    <List>
        {todos.map(todo => {
          return <Todo todo={todo} key={todo.id}/>;
        })}
        {/* <button onClick={() => checkTodo(todos)} className="complete-btn">complete</button> */}
    </List>
  )
}

export default List;