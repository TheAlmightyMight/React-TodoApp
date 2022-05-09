import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    let [name, setName] = useState('');
    let [todos,setTodos] = useState([]);
    let [completedTodos, setCompletedTodos] = useState([])
    let [input,setInput] = useState('');

    const setValue = (e) => {
        if(e.key === 'Enter'){
            setName(e.target.value)
            setInput('');
        }
    }

    const createTodo = (name,e) => {
        e.preventDefault();
        setTodos ([...todos, {name: name, id: Date.now(), completed: false}]);
    }

    const removeTodo = (id) => {
        let newTodos = todos.filter(el => el.id !== id);
        setTodos(newTodos);
    }

    const completeTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }
    
    const checkTodo = (completedTodos) => {
        setCompletedTodos(completedTodos.map(todo => {
            return todo.completed;
        }))
    }

    return (
        <DataContext.Provider value={{
            checkTodo,
            completeTodo,
            removeTodo,
            todos,
            setInput,
            setValue,
            input,
            name,
            createTodo,
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;