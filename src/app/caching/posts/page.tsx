import Post from "./post";

export default async function Page() {
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
