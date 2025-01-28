<script>
    let {data} = $props();
    $inspect(data) 
</script>

<!--$inspect per controllare nella console-->



<h1>Blog post {data.id}</h1>
<h2>{data.title.toUpperCase()}</h2>
<p>{data.body[0].toUpperCase()+data.body.slice(1)}</p>