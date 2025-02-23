export const load = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();

    return {
        posts: posts.map(post => ({ //ricordati che stai ritornando una proprietà contenente una serie di oggetti e NON un'oggetto direttamente
            id: post.id,
            title: post.title
        }))
    };
};


// Alternativa 2: usando forEach
/* export const load = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const fullPosts = await response.json();
    
    const simplifiedPosts = [];
    fullPosts.forEach(post => {
        simplifiedPosts.push({
            id: post.id,
            title: post.title
        });
    });

    return { posts: simplifiedPosts };
};
 */
