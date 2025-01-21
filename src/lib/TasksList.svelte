<script>
    let {tasks, toggleDone, removeTask} = $props();
</script>

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
<style>
    .done{
        text-decoration: line-through; 
    }
</style>
