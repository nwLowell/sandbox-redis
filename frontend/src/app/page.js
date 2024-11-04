import Link from "next/link";

export default async function Home() {
    const response = await fetch(`${process.env.BACKEND_URL}/posts`);
    const { data: posts } = await response.json();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">The Blog!</h1>
            <div className="grid grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                    >
                        <Link href={`/posts/${post.id}`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {post.title}
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {post.content.slice(0, 100)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
