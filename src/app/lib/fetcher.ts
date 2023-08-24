export async function getPost(id: string) {
  const resp = await fetch(`http://localhost:3000/post/${id}`, {
    next: { revalidate: 5 },
  }); // data cache

  return resp.json();
}

export function preload(id: string) {
  void getPost(id);
}
