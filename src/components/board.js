import React from 'react';
import List from './list';
import Input from './input';
import styled from 'styled-components';

const BoardWrapper = styled.div`
margin-top:120px;
width:520px;
height:520px;
border:1px solid green;
z-index:10;
`

function Board() {
  return (
      <BoardWrapper>
        <Input/>
        <List/>
      </BoardWrapper>
  )
}

export default Board;