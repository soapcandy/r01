const TodoList = ({arr, removeFn, modifyFn}) => {
    return (
        <div>
            <ul>
                {arr.map(todo =>
                    <li className="m-3 text-3xl p-3" key={todo.tno}>{todo.tno} - {todo.title}
                        <button className="bg-red-400" onClick={() => removeFn(todo.tno)}>DEL</button>
                        <button className="bg-red-400 m-3" onClick={() => modifyFn(todo.tno)}>MOD</button>
                    </li>
                )}
            </ul>
        </div>
    );
}
 
export default TodoList