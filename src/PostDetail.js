import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function PostDetail() {
    const params=useParams();
    const [isData,setData]=useState([]);
    const url=" http://hn.algolia.com/api/v1/items/"
    useEffect(()=>{
        fetch(`${url}${params.objectID}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
            console.log(data.children)
        })
    },[])
    console.log(params)
   
  return (
    <>
    <h2>Post Details</h2>
    <h2>{isData.title}</h2>
    </>
  )
}

export default PostDetail