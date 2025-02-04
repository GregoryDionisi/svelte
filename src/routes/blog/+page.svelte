<script>
    // VERSIONE PRECEDENTE
    //export let data;
    
    // VERSIONE ATTUALE
    let {data} = $props();
    $inspect(data)
</script>

<h1>My Blog</h1>

<ul>
{#each data.posts as post}
    <li><a href={`/blog/${post.id}`}>{post.title}</a></li>
{/each}
</ul>