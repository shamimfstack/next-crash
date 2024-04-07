import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

//   setting metadata for individual page
export const metadata = {
    title: "All posts",
    description: "This is all post page",
  }

export default async function Posts() {

    const posts = await getAllPosts();
    console.log(posts);

    return (
        <div className="mt-6">
            <h1>All posts</h1>
            <div className="mt-6">
                {posts.map(post => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
            </div>
        </div>
        );
}