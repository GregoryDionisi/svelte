<script>
  import Componente1 from "$lib/Componente1.svelte"; 
  import Contact from "$lib/Contact.svelte"; 
  import Componente2 from "$lib/Componente2.svelte"; 
  let name = "Gregory";

  let persona = {
    nome: "Mario",
    cognome: "Rossi",
    email: "mario.rossi@example.com",
    password: "securepassword123"
  };
</script>

<h1>Welcome {name.toLocaleUpperCase()}</h1>

<p>
  <a href="/firstPage">Vai alla firstPage</a>
</p>

<div>
  <Componente1 id={1} />
  <Componente1 id={2} />
  <Componente1 />
  <Contact 
    nome={persona.nome}
    cognome={persona.cognome}
    email={persona.email}
    password={persona.password}
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
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>
