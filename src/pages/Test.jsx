import React, { useEffect, useState } from "react";

export const Test=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("я замаунтился");
    },[count])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </>
    )
}