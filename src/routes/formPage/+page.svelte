<script>
    import Header from "$lib/Header.svelte";

    //let name = $state(); //variabile reattiva che reagisce ai cambiamenti della UI

    let formState = $state({
        name: "",
        birthday: "",
        step: 0,
        error: "",
    });
</script>

<h1>Form Page</h1>

<Header name = {formState.name}/>

<p>Step: {formState.step + 1}</p> <!--Per un utente sarebbe meglio vedere 1 invece di 0-->


{#if formState.step === 0}
    <div>
        <label for = "name">Your name</label>
        <input type = "text" bind:value = {formState.name} /> <!--per collegare l'input a una variabile usiamo bind-->
    </div>
    <button onclick = {() => {
        if (formState.name !== ""){
            formState.step += 1;
            formState.error = "";
        } else {
            formState.error = "Please enter your name";
        }
    }}>Next</button>
{:else if formState.step === 1}
    <div>
        <label for = "birthday">Your birthday</label>
        <input type = "date" bind:value = {formState.birthday} /> <!--per collegare l'input a una variabile usiamo bind-->
    </div>
        <button onclick = {() => {
            if (formState.birthday !== ""){
                formState.step += 1;
                formState.error = "";
            } else {
                formState.error = "Please enter your birthday";
            }
        }}>Next</button>
{/if}

{#if formState.error}
    <p>{formState.error}</p>
{/if}