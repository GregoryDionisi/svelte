export const load = async (event) => { //la funzione andrà a recuperare i valori
    //console.log(postId);
    const {postId} = event.params;
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