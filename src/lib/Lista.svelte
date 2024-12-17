<script>
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

<h1>Visualizzazione in tabella</h1>
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Prezzo</th>
            <th>Descrizione</th>
        </tr>
    </thead>
    <tbody>
        {#each lista as item} <!--each <nome array> as <nome a piacere per scorrere l'array-->
            <tr>
                <td>{item.nome}</td>
                <td>{item.prezzo}</td>
                <td>{item.descrizione}</td>
            </tr>
        {/each}
    </tbody>
</table>


<h1>Visualizzazione in card</h1>
<div class="card-list">
    {#each lista as item}
        <div class="card">
            <h3>{item.nome}</h3>
            <p>Prezzo: {item.prezzo}</p>
            <p>Descrizione: {item.descrizione}</p>
        </div>
    {/each}
</div>
<style>

.card {
    margin-top: 20px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    background-color: azure;
}
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