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

<style>
    form {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 15px;
        color: #333;
        font-weight: 500;
    }

    input[type="text"] {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
    }

    input[type="text"]:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 2px rgba(52,152,219,0.2);
    }

    button {
        background-color: #2ecc71;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #27ae60;
    }
</style>

<form onsubmit={formSubmitted}>
    <label> 
        Task name:
        <input type="text" name="taskName" bind:value={newTask} placeholder="Enter your task">
    </label>
    <div>
        <button>Add</button>
    </div>
</form>
<!--{newTask}-->