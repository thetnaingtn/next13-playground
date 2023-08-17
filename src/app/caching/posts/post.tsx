import Detail from "./detail";

export async function getPost(id: string) {
  const resp = await fetch(`http://localhost:3000/post/${id}`, {
    next: { revalidate: 5 },
  }); // data cache

  return resp.json();
}

export default async function Post({ id }: { id: string }) {
  const post = await getPost(id);
  return (
    <div>
      <h1>{post.title}</h1>
      {/* @ts-expect-error server component */}
      <Detail id={id} />
    </div>
  );
}
