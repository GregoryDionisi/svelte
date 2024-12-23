<script>
    import Card from "$lib/Card.svelte";

    const lista = [
        {
            id: 1,
            nome: "item 1",
            prezzo: 10,
            descrizione: "Descrizione item 1"
        },
        {
            id: 2,
            nome: "item 2",
            prezzo: 20,
            descrizione: "Descrizione item 2"
        },
        {
            id: 3,
            nome: "item 3",
            prezzo: 30,
            descrizione: "Descrizione item 3"
        },
        {
            id: 4,
            nome: "item 4",
            prezzo: 40,
            descrizione: "Descrizione item 4"
        },
        {
            id: 5,
            nome: "item 5",
            prezzo: 50,
            descrizione: "Descrizione item 5"
        }
    ]
</script>

<h1>Visualizzazione in card</h1>
<div class="card-list">
{#each lista as item}
    <Card 
nome = {item.nome}
prezzo = {item.prezzo}
descrizione = {item.descrizione}
    />
{/each}
</div>
<style>
.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
    table{
        width: 100%;
        border-collapse: collapse;

    }
    th, td{
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: bisque;
    }
</style>