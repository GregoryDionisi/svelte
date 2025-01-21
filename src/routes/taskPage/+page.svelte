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
    <button onclick={() => currentFilter = filter} style="text-transform: capitalize">{filter}</button>
{/snippet}