import {useRef, useState} from "react";
import useDebounce from "./hooks/useDebounce";
import React from "react";
import axios from "axios";
import useRequest from "./hooks/useRequest";

function App() {
    const [todos, loading, error] = useRequest(fetchTodos)
    function fetchTodos() {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>Произошла ошибка при загрузке данных!</h1>
    }

    return (
    <div >
        {todos && todos.map(todo =>
            <div key={todo.id} className='todo-item'>
                {todo.id}. {todo.title}
            </div>
        )}
    </div>
  );
}

export default App;
