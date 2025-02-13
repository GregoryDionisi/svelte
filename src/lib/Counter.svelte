<script>
let count = $state(0); //$state variabile reattiva

function increment() {
  count += 1;
}

function decrement() {
  count -= 1;
}
</script>

<div class = subComponente>
<p>Count: {count}</p>
<button onclick = {increment}> + </button>
<button onclick = {decrement}> - </button>
{#if count > 10} <!--IMPORTANTISSIMO che count sia $state e quindi reattivo perchè se non fosse così non ci sarebbe un continuo controllo con l'if-->
  <p>Count è maggiore di 10</p>
  {:else if count < 0}
    <p>Count è minore di 0</p>
  {:else}
    <p>Count è compreso tra 0 e 10</p>
{/if}
</div>

<style>
	button {
		background-color: yellow;
	}
  div {
		border: 1px solid black;
    padding: 10px;
    width: 300px;
    text-align: center;
    align-items: center;
    border-radius: 10px;
	}

  .subComponente {
    background-color: lightblue;
    border: 1px solid black;
    padding: 10px;
    width: 200px;
    border-radius: 10px;
    margin: 10px auto;
	}
</style>