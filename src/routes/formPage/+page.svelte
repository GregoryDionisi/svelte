<script>
    import Header from "$lib/Header.svelte";

    //let name = $state(); //variabile reattiva che reagisce ai cambiamenti della UI

   /* let formState = $state({
        name: "",
        birthday: "",
        step: 0,
        error: "",
    }); */

    let formState = $state({
        answers: {},
        step: 0,
        error: "",
    });

    const QUESTION = [
        {
            id: "name",
            question: "What is your name",
            type: "text"
        },
        {
            id: "birthday",
            question: "What is your birthday",
            type: "date"
        },
        {
            id: "color",
            question: "What is your favourite color",
            type: "color"
        }
    ]

    function nextStep(id){
        if (formState.id !== ""){
            formState.step += 1;
            formState.error = "";
        } else {
            formState.error = "Please enter your birthday";
        }
    }
</script>

<h1>Form Page</h1>

<Header name = {formState.answers?.name}/> <!--si mette punto di domanda perchè la proprietà name non c'è ancora-->

<p>Step: {formState.step + 1}</p> <!--Per un utente sarebbe meglio vedere 1 invece di 0-->

{#each QUESTION as {id, question, type}}
    {@render formStep({id, question, type})}
{/each}

{JSON.stringify(formState)}

{#if formState.error}
    <p>{formState.error}</p>
{/if}

{#snippet formStep({id, question, type})} <!--Snippet è una sorta di funzione-->
    <div>
        <label for={id}>{question}</label>
        <input {type} bind:value = {formState.answers[id]}> <!--metti bind attaccato a value-->
    </div>
    <!-- <button onlick={nextStep()}>Next</button> -->
{/snippet}