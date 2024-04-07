
export default async function getPost(id) {
    const result = fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return (await result).json();
}