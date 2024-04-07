import { notFound } from "next/navigation"

export default function BlogPage({params}) {
    console.log(params);
    const { id } = params;

    if(id === "4") {
        notFound();
    }
    return (
        <div>
            <h1>This is blog id is: {id}</h1>
        </div>
        );
}