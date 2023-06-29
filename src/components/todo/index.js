import { useState } from "react";
import TemplatePage from "../../layout/TemplatePage";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList"
import TodoModify from "./TodoModify";

const Todo = () => {

    const [todoArr, setTodoArr] = useState([])
    

    const addTodo = (newTodo) => {
        console.log("add Todo", newTodo)
        setTodoArr([...todoArr, newTodo])
    }

    const removeTodo = (tno) => {
        console.log("removeTodo", tno)

        setTodoArr(todoArr.filter(todo => todo.tno !== tno))
    }

    const modifyFn = (mod) => {
        console.log("modify", mod)

        const target = todoArr.filter(todo => todo.tno !== mod)
        
        setTodoArr(target)
        setTodoArr(null)
    } 

    return (
        <TemplatePage>
            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoList arr={todoArr} removeFn={removeTodo} modifyFn={modifyFn}></TodoList>
            <TodoModify target={todoArr}></TodoModify>
        </TemplatePage>
    );
}

export default Todo;