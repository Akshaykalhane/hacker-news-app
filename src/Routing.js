import React from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import App from './App.js';
import PostDetail from './PostDetail.js';
const Routing=()=>{

    return(
       <BrowserRouter>
       <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/postDetail/:objectID' element={<PostDetail/>}></Route>
       </Routes>
       </BrowserRouter>
    )
}

export default Routing;