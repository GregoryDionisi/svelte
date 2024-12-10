<script>
import Componente1 from "$lib/Componente1.svelte"; //$ è un alias e vuol dire che puoi accedere da qualsiasi parte alla cartella lib. é meglio usare l'alias rispetto al metodo tradizionale ../lib
let name = "Gregory"
</script>

<h1>Welcome {name.toLocaleUpperCase()}</h1>

<p>
<a href="/firstPage">Vai alla firstPage</a>
</p>

<div>
<Componente1 id = {1} />
<Componente1 id = {2}/>
<Componente1 id = {3}/>
</div>

<style>
	h1 {
		color: blue;
	}
	a {
		color: red;
	}
	div{
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>