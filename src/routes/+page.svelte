<script>
import Componente1 from "$lib/Componente1.svelte"; //$ è un alias e vuol dire che puoi accedere da qualsiasi parte alla cartella lib. é meglio usare l'alias rispetto al metodo tradizionale ../lib
import Contact from "$lib/Contact.svelte";
import Componente2 from "$lib/Componente2.svelte";
import Counter from "$lib/Counter.svelte";
import Array from "$lib/Array.svelte";
let name = "Gregory"

let persona = {
	nome: "Paola",
	cognome: "Rossi",
	email: "paolarossi@gmail.com",
	password: "123456"
}
</script>

<h1>Welcome {name.toLocaleUpperCase()}</h1>

<p>
<a href="/firstPage">Vai alla firstPage</a>
<a href="/formPage">Vai alla formPage</a>
<a href="/taskPage">Vai alla taskPage</a>
<a href="/blog">Vai al Blog</a>
</p>

<div>
<Componente1 id = {1} />
<Componente1 id = {2}/>
<Componente1 />
<Contact 
nome = {persona.nome}
cognome = {persona.cognome}
email = {persona.email}
password = {persona.password}
/>
<Componente2 />
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