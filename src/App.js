import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const App = () => {
  const url = "https://hn.algolia.com/api/v1/search?query"
  const [isData, setData] = useState([]);
  const [isType, setType] = useState('test')

  useEffect(() => {
    fetch(`${url}=${isType}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        console.log(data.hits)
        setData(data.hits)
      })
  }, [isType])

  const renderWaiting=()=>{
    if(isData.length===0){
      console.log('function running')
      return(
        <>
        {/* <h2>loading</h2> */}
        <div className='waiting-div'>
          <div className='loading-div'>
            <div className='loading-head'></div>
            <div className='loading-content'></div>
          </div>
          <div className='loading-div'>
            <div className='loading-head'></div>
            <div className='loading-content'></div>
          </div>
          <div className='loading-div'>
            <div className='loading-head'></div>
            <div className='loading-content'></div>
          </div>
          <div className='loading-div'>
            <div className='loading-head'></div>
            <div className='loading-content'></div>
          </div>
        </div>
      </>
    )
  }
  }

  const handleInputSearch = (e) => {
    console.log(e.target.value);
    setType(e.target.value)
  }

  console.log(isData)

  return (
    <>
      <header className='header'>
        <div className='heading'>
          <h2>Hacker news</h2>
        </div>
        <div className='search-bar'>
        <input type="text" placeholder='search' value={isType} onChange={handleInputSearch} />
        </div>
      </header>
      <h3 className='category'>Category : <span className='cate'>{isType}</span></h3>
      <div className='container'>
      {isData.map((item) => (
        <Link to={`/postDetail/${item.objectID}`} style={{textDecoration:'none'}}>
          <div key={item.objectID} className='news-div'>
            <h2>{item.title}</h2>
            <p>- {item.author}</p>
          </div>
        </Link>
      ))}
  {renderWaiting()}
      </div>
    </>
  )
}

export default App