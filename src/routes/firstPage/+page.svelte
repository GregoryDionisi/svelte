<script>
    import Lista from "$lib/Lista.svelte";
    import CardContainer from "$lib/CardContainer.svelte";
</script>

<h1>Benvenuto nella firstPage</h1>

<p>
<a href="/">Vai alla home</a>
</p>
<p>
<a href="/secondPage">Vai alla secondPage</a>
<Lista />
<CardContainer />
</p>


<style>
    h1 {
        color: green;
    }
</style>