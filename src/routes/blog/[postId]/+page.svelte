<script>
    // VERSIONE PRECEDENTE
    //export let data;
    
    // VERSIONE ATTUALE
    let {data} = $props(); //gli oggetti che ritorni vengono sempre incapsulati in una variabile chiamata "data"
    $inspect(data) 
</script>

<!--$inspect per controllare nella console-->



<h1>Blog post {data.id}</h1>
<h2>{data.title.toUpperCase()}</h2>
<p>{data.body[0].toUpperCase()+data.body.slice(1)}</p>