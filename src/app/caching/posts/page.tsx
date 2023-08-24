import Post from './post';
import { preload } from '@/app/lib/fetcher';

export default async function Page() {
  preload('3');
  return (
    <div>
      {/* @ts-expect-error server component */}
      <Post id="1" />
      {/* @ts-expect-error server component */}
      <Post id="2" />
      {/* @ts-expect-error server component */}
      <Post id="3" />
    </div>
  );
}
