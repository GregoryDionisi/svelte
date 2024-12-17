<script>
    let { nome = "---", prezzo = "---", descrizione = "---" } = $props(); //props si usa come una specie di argomento
</script>

<div class="card">
    <h3>{nome}</h3>
    <p>Prezzo: {prezzo}</p>
    <p>Descrizione: {descrizione}</p>
 </div>

<style>
    .card {
    margin-top: 20px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    background-color: azure;
}
</style>