<script>
    import TaskForm from "$lib/TaskForm.svelte";
    import TasksList from "$lib/TasksList.svelte";
    let tasks = $state([]); //dobbiamo dichiararlo come lista
    function addTask(newTask){
        console.log(newTask);
        tasks.push({
            id: crypto.randomUUID(), //random generator di id criptati
            title: newTask,
            done: false
        })
    }
    function toggleDone(task){
        task.done = !task.done;
    }
    function removeTask(id){
        const index = tasks.findIndex(
            (task) => task.id === id
            );
        tasks.splice(index, 1); //splice rimuove in modo preciso
    }
    const filters = ["all", "todo", "done"];
    let currentFilter = $state(filters[0]); //inizializzato a "all"
    let totalDone = $derived( //$derived si usa quando una variabile viene modificata. Utile per i contatori come questo
        tasks.reduce(
            (total, task) => total +(task.done ? 1 : 0),
            0 //0 perchè non l'ha ancora completato
        )
    )
    let filteredTasks = $derived.by(() => {
        switch (currentFilter) {
            case "all": {
                return tasks;
            }
            case "done": {
                return tasks.filter((task) => task.done);
            }
            case "todo": {
                return tasks.filter((task) => !task.done);
            }
        }
        return tasks;
    })
    $inspect(tasks);
</script>

<style>
    :global(body) {
        font-family: 'Segoe UI', system-ui, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
    }

    h1 {
        color: #2c3e50;
        text-align: center;
        margin-bottom: 30px;
    }

    p {
        text-align: center;
        color: #666;
        font-size: 1.1em;
        margin: 20px 0;
    }

    button {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 8px 16px;
        margin: 0 5px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #2980b9;
    }

    /* Stile per il bottone del filtro attivo */
    button[data-active="true"] {
        background-color: #2ecc71;
    }
</style>

<h1>Task App</h1>
<TaskForm {addTask}/>
<p>
    {#if tasks.length}
        {totalDone}/{tasks.length} {tasks.length < 2 ? "task" : "tasks"} completed
    {:else}
        Add a task to start
    {/if}
</p>
{#if tasks.length}
    {@render filterButton("all")}
    {@render filterButton("todo")}
    {@render filterButton("done")}
    <!-- <button onclick={() => currentFilter = "all"}>All</button>
    <button onclick={() => currentFilter = "todo"}>Todo</button>
    <button onclick={() => currentFilter = "done"}>Done</button> --> <!--altro modo senza snippet-->
{/if}
<TasksList 
    tasks = {filteredTasks}
    {toggleDone}
    {removeTask}
/>
{#snippet filterButton(filter)}
    <button 
        onclick={() => currentFilter = filter} 
        style="text-transform: capitalize"
        data-active={currentFilter === filter}
    >{filter}</button>
{/snippet}