import {useState} from 'react';

export default function useCount(init:number){
    const [count, setCount] = useState(init)

   function increment(){
        setCount((val) => val + 1)
   }

   return [count, increment] as const
}