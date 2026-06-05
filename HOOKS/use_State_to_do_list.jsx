import { useState } from "react";

function US6(){
    const [task, settask] = useState("");
    const [todolist, settodolist] = useState([]);

    function addtask(){
        if (task.trim() === "") return; 
        
        settodolist([...todolist, { id: Date.now(), name: task }]);
        settask("");
    }

    function deletetask(id){
        settodolist(todolist.filter((t) => t.id !== id));
    }

    return (
        <>
        <br />
        <input 
            type="text" 
            placeholder="Enter Task" 
            value={task} 
            onChange={(e) => settask(e.target.value)}
        />
        <br />
        <button onClick={addtask}>Add</button>
        <br />
        
        {todolist.map((t) => (
            <div key={t.id}>
                <h3>{t.name}</h3>
                <button onClick={() => deletetask(t.id)}>Delete</button>
            </div>
        ))}
        </>
    );
}

export default US6;
