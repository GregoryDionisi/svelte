export const load = async (event) => { //la funzione andrà a recuperare i valori. Event è un oggetto speciale che contiene informazioni sulla richiesta dell'utente
    //console.log(postId);
    const {postId} = event.params; //la costante postId prende direttamente il valore dalla route dinamica [postId]
    //console.log(postId);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const responseBody = await response.json();
    //console.log(responseBody);

    return{
        id: responseBody.id,
        title: responseBody.title,
        body: responseBody.body
    }
}