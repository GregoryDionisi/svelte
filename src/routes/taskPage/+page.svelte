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

    function removeTask(index){
        tasks.splice(index, 1); //splice rimuove in modo preciso
    }

    let totalDone = $derived( //$derived si usa quando una variabile viene modificata. Utile per i contatori come questo
        tasks.reduce(
            (total, task) => total +(task.done ? 1 : 0),
            0 //0 perchè non l'ha ancora completato
        )
    )

    $inspect(tasks);
</script>

<h1>Task App</h1>

<p>
{#if tasks.length}
    {totalDone}/{tasks.length} {tasks.length < 2 ? "task" : "tasks"} completed
{:else}
    Add a task to start
{/if}
</p>

<TaskForm {addTask}/>
{#if tasks.length}
    <button>All</button>
    <button>Todo</button>
    <button>Done</button>
{/if}
<TasksList 
    {tasks}
    {toggleDone}
    {removeTask}
/>