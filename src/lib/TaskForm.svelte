<script>
    let newTask = $state();
    let {addTask} = $props();

    function formSubmitted(){
        event.preventDefault();
        //console.log(newTask);
        addTask(newTask);
        newTask = '';
}
</script>

<h1>Task form</h1>

<form onsubmit={formSubmitted}>
    <label> 
        Task name:
        <input type="text" name="taskName" bind:value={newTask}>
    </label>
    <div>
        <button>Add</button>
    </div>
</form>

<!--{newTask}-->