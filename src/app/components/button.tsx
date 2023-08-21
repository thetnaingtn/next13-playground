'use client';
import Info from './info';
import useCount from './useCount';

export default function Button(props: any) {
  const [count, increment] = useCount(5);
  return (
    <>
      <button onClick={increment}>Click me!</button>
      <Info value={count} />
    </>
  );
}
