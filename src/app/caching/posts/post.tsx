import Detail from './detail';
import { getPost } from '@/app/lib/fetcher';

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
