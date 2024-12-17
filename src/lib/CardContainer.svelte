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
    <Card 
nome = {lista[0].nome}
prezzo = {lista[0].prezzo}
descrizione = {lista[0].descrizione}
    />
    <Card 
nome = {lista[1].nome}
prezzo = {lista[1].prezzo}
descrizione = {lista[1].descrizione}
    />
    <Card 
nome = {lista[2].nome}
prezzo = {lista[2].prezzo}
descrizione = {lista[2].descrizione}
    />
    <Card 
nome = {lista[3].nome}
prezzo = {lista[3].prezzo}
descrizione = {lista[3].descrizione}
    />
    <Card 
nome = {lista[4].nome}
prezzo = {lista[4].prezzo}
descrizione = {lista[4].descrizione}
    />
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