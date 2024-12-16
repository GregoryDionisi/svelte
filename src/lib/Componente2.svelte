<script>
import Counter from "$lib/Counter.svelte";
import Array from "$lib/Array.svelte";
let {id = "#id"} = $props()
</script>
 
<div>
<h1>Sono il Componente {id}</h1>
<Counter />
<Array />
</div>
 
<style>
	h1 {
		color: blue;
	}
  div {
		border: 1px solid black;
    padding: 10px;
    width: 300px;
    text-align: center;
    align-items: center;
    border-radius: 10px;
	}
</style>