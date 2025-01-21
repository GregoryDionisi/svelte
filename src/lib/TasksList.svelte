<script>
    let {tasks, toggleDone, removeTask} = $props();
</script>

<style>
    div {
        background: white;
        margin: 10px 0;
        padding: 15px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        transition: transform 0.2s;
    }

    div:hover {
        transform: translateX(5px);
    }

    label {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    input[type="checkbox"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }

    span {
        flex: 1;
        color: #2c3e50;
        font-size: 16px;
    }

    .done {
        text-decoration: line-through;
        color: #7f8c8d;
    }

    button {
        background-color: #e74c3c;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #c0392b;
    }
</style>

{#each tasks as task}
    <div>
        <label>
            <input 
                type="checkbox"
                checked={task.done}
                onchange = {() => toggleDone(task)}
            >
            <!--il bind a quanto pare non serve-->
            <span class:done={task.done}>{task.title}</span>
            <button onclick = {() => removeTask(task.id)}>Remove</button> <!--quando hai l'argomento usi la funzione freccia-->
        </label>
    </div>
{/each}
<!--line-through la sbarra-->