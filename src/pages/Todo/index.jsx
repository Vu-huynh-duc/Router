import { useState } from "react";

const Todo = () => {
    const [lists, setLists] = useState([])
    const [inputValue, setInputValue] = useState("");    

    const totalTasks = lists.length
    const completeTasks = lists.filter(task => task.completed).length

    const handleDelete = (id) => {
        const newList = lists.filter(item => item.id !== id);
        setLists(newList);
    };

    const handleCheck = (id) => {
        const newList = lists.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        });
        setLists(newList);
    };

    return <>
        <h1 className="todo-title">To do</h1>
        <input className="todo-input" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button className="todo-add" onClick={() => {
            if (!inputValue.trim()) return
            const newTask = {
                id: crypto.randomUUID(),
                title: inputValue,
                completed: false
            };

            setLists([...lists, newTask]);
            setInputValue("")
        }
        }>
            Add Task
        </button>

        <ul className="todo-list">
            {lists.map(item => <li key={item.id} style={{ textDecoration: item.completed ? "line-through" : "none" }} > {item.title}
                <button onClick={() => handleDelete(item.id)}>
                    Xóa
                </button>
                <input type="checkbox" checked={item.completed} onChange={() =>
                    handleCheck(item.id)} />

            </li>)}
        </ul>

        {totalTasks ? <p className="todo-stats">Đã hoàn thành {completeTasks}/{totalTasks} công việc</p>
            : <p className="todo-empty">Chưa có task nào. Hãy thêm task đầu tiên!</p>}
    </>
}

export default Todo



