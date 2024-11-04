export default async function Page({ params }) {
    const response = await fetch(
        `${process.env.BACKEND_URL}/posts/${params.id}`
    );
    const [post] = await response.json();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}