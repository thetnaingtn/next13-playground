import { getPost } from '@/app/lib/fetcher';

export default async function Detail({ id }: { id: string }) {
  const post = await getPost(id);
  return <p>{post.description}</p>;
}
