<script>
    let newTask = $state();
</script>

function formSubmitted(){
    console.log(newTask);
}

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

{newTask}