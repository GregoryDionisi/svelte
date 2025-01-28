export const load = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();

    return {
        posts: posts.map(post => ({
            id: post.id,
            title: post.title
        }))
    };
};
