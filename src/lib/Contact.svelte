<script>
    let { nome = "---", cognome = "---", email = "---", password = "---" } = $props(); //props si usa come una specie di argomento
</script>

<div>
    <h1>Contatti</h1>
    <p>Nome: {nome}</p>
    <p>Cognome: {cognome}</p>
    <p>Email: {email}</p>
    <p>Password: {password}</p>
</div>

<style>
	h1 {
		color: blue;
	}
    div {
        border: 1px solid black;
        padding: 10px;
        width: 300px;
        text-align: center;
        align-items: center;
        border-radius: 10px;
        }
</style>