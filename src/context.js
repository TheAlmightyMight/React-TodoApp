import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
   
    const loadedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

    let [todos,setTodos] = useState(loadedTodos);
    let [completedTodos, setCompletedTodos] = useState([]);
    let [activeTodos, setActiveTodos] = useState([]);
    let [input,setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

    useEffect(() => {
        setCompletedTodos(todos.filter(todo => todo.completed));
        setActiveTodos(todos.filter(todo => !todo.completed));
    },[todos])

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input){
            createTodo(input);
            setInput('');
        }
    }
    
    const createTodo = (input) => {
       setTodos ([...todos, {name: input, id: Date.now(), completed: false}]);
    }

    const removeTodo = (id) => {
         let newTodos = todos.filter(el => el.id !== id);
         setTodos(newTodos);
    }

    const clearCompleted = () => {
       let clearedTodos = todos.filter(todo => !todo.completed);
        setTodos(clearedTodos);
    }

    // const removeCompletedTodo = (id) => {
    //     let newCompletedTodos = todos.filter(el => el.id !== id);
    //     setCompletedTodos(newCompletedTodos);
    // }

    const completeTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }
    
    return (
        <DataContext.Provider value={{
            handleInputChange,
            handleSubmit,
            createTodo,
            completeTodo,
            removeTodo,
            clearCompleted,
            todos,
            completedTodos,
            activeTodos,
            input,
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;