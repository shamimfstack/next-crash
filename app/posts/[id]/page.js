import getPost from "@/lib/getPost";

export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body
    }
}


export default async function Post({params}) {
    const { id } = params;

    const post = await getPost(id);
    // console.log(post);
    const { title, body } = post;
    return (
        <div className="mt-6 border-b-2">
            <h2 className="text-xl font-semibold text-green-600">{title}</h2>
            <p>{body}</p>
        </div>
        );
}