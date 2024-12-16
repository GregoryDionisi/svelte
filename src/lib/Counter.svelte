<script>
let count = $state(0); //$state variabile reattiva

function increment() {
  count += 1;
}

let double =$derived(count * 2) //lo stato di double dipende dallo stato di count. Non posso usare $derived senza uno $state

//$effect((() => {alert(`Il valore del contatore è ${count}`)}));
</script>

<div class = subComponente>
<button onclick = {increment}>Clicked {count}</button>
<p>Il doppio di {count} è {double}</p>
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
    padding: 10px;
    width: 200px;
    border-radius: 10px;
    margin: 10px auto;
	}
</style>