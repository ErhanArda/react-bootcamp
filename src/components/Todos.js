import React from "react";
import Todo from "./Todo";

function Todos(props) {
    return (
        <div>
            <button
                onClick={e => {
                    props.addTodo("Learn Redux Thunk");
                }}>
                Yeni Ekle
            </button>
            <ul>
                {props.todos.map((todo, index) => {
                    return <Todo name={todo} />;
                })}
            </ul>
        </div>
    );
}

export default Todos;
