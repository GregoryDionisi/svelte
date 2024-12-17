<script>
let array = $state([1,2,3,4,5]);
let sum = $derived(array.reduce((a, b) => a + b, 0));

function addNumber() {
  array.push(array.length + 1)
}

$inspect(array)

//$effect((() => {alert(`Il valore del contatore è ${count}`)}));
</script>

<div class = subComponente>
<button onclick = {addNumber}>Add number</button>
{#if sum > 100}
  <p>Sum is too big</p>
{:else}
  <p>Sum :{sum}</p>
{/if}
<p>{array.join(" + ")} = {sum}</p> <!--con join unisci gli elementi dell'array con +-->
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