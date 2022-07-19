import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './postdetail.css'

function PostDetail() {
  const params = useParams();
  const [isData, setData] = useState([]);
  const [child, setChild] = useState([])
  const url = " http://hn.algolia.com/api/v1/items/"
  useEffect(() => {
    fetch(`${url}${params.objectID}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // console.log(data.children)
        setChild(data.children)
      })
  }, [params])

  console.log(isData)

  const renderLoading=()=>{
    if(isData.length===0||child.length===0){
      console.log('fsdgsdf')
      return(
        <>
      <div className='post-loading'>
        <h3>loading..</h3>
        <div className='post-loading-head'></div>
        <div className='post-loading-head'></div>
      </div>
      <div className='post-loading'>
        <h3>loading..</h3>
        <div className='post-loading-head'></div>
        <div className='post-loading-head'></div>
      </div>
      <div className='post-loading'>
        <h3>loading..</h3>
        <div className='post-loading-head'></div>
        <div className='post-loading-head'></div>
      </div>
      </>
    )
  }
  }

 

  return (
    <>
      <div className='post-div'>
        <div className='post-detail'>
        <h2>{isData.title}</h2>
        <p className='point'>Points : {isData.points}</p>
        </div>
        <div className="comment-heading"><h2>Comments : </h2></div>
        {
          child.map((item) => (
            <div key={item.id} className='child'>
              <h3>{item.author}</h3>
              <p>{item.text}</p>
              <p >Date : {item.created_at}</p>
            </div>
          ))
        }
      </div>
      {renderLoading()}
    </>
  )
}

export default PostDetail