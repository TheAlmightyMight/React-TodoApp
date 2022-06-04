import React, { useContext, useState } from "react";
import DataContext from "../context";
import List from "./list";
import Input from "./input";
import styled from "styled-components";

const BoardWrapper = styled.div`
  margin-top: 30px;
  width: 520px;
  height: auto;
  margin-bottom: 100px;
  z-index: 10;
`;

const FiltersPanel = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(236, 9%, 61%);
`;

const FilterBtn = styled.button`
  border: none;
  background-color: transparent;
  color: hsl(234, 11%, 52%);
  font-size: 16px;
  font-weight: 400;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
`;

function Board() {
  let { todos, clearCompleted } = useContext(DataContext);
  let [isVisible, setIsVisible] = useState(true);
  let [isCompletedVisible, setCompletedVisible] = useState(false);
  let [isActiveVisible, setActiveVisible] = useState(false);

  const toggleAll = () => {
    setIsVisible(true);
    setCompletedVisible(false);
    setActiveVisible(false);
  };

  const toggleActive = () => {
    setIsVisible(false);
    setCompletedVisible(false);
    setActiveVisible(true);
  };

  const toggleCompleted = () => {
    setIsVisible(false);
    setCompletedVisible(true);
    setActiveVisible(false);
  };

  return (
    <>
      <BoardWrapper>
        <Input />
        <List
          isActiveVisible={isActiveVisible}
          isVisible={isVisible}
          isCompletedVisible={isCompletedVisible}
        />
        <FiltersPanel>
          <p>{todos.length}items left</p>
          <FilterBtn className="filter-btn" onClick={toggleAll}>
            All
          </FilterBtn>
          <FilterBtn className="filter-btn" onClick={toggleCompleted}>
            Completed
          </FilterBtn>
          <FilterBtn className="filter-btn" onClick={toggleActive}>
            Active
          </FilterBtn>
          <FilterBtn className="filter-btn" onClick={clearCompleted}>
            Clear completed
          </FilterBtn>
        </FiltersPanel>
      </BoardWrapper>
    </>
  );
}

export default Board;
