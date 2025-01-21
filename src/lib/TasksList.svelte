<script>
    let {tasks, toggleDone, removeTask} = $props();
</script>

<h1>Task List</h1>
{#each tasks as task, index}
    <div>
        <label>
            <input 
                type="checkbox"
                checked={task.done}
                onchange = {() => toggleDone(task)}
            >
            <!--il bind a quanto pare non serve-->
            <span class:done={task.done}>{task.title}</span>
            <button onclick = {() => removeTask(index)}>Remove</button> <!--quando hai l'argomento usi la funzione freccia-->
        </label>
    </div>
{/each}

<!--line-through la sbarra-->
<style>
    .done{
        text-decoration: line-through; 
    }
</style>
