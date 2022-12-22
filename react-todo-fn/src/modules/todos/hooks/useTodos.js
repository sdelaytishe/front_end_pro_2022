import { useState, useEffect} from  'react';
import todosService from "../services/todosService";

export default function useTodos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getList().then(setTodos)
    }, []);


    function toggleTodo(id) {
        const todo = todos.find(item => item.id === id);

        todosService.update({...todo, isDone: !todo.isDone}).then((data) => {
            setTodos(todos.map((item) => (item.id === data.id ? data : item)));
        })
    }
    function deleteTodo(id){
        todosService
            .delete(id)
            .then(() => {
                setTodos(todos.filter((item) => item.id !== id));
            })
    }

    function createTodo(newTodo) {
        todosService.create({...newTodo, isDone: false}).then(data =>{
            setTodos([...todos, data]);
        });
    }

    return {
        todos,
        toggleTodo,
        deleteTodo,
        createTodo,
    };

}