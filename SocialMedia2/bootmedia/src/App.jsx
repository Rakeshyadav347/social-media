
import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import { useState } from 'react'
import PostListProvider from './components/store/post-list-store'

function App() {
        const [curstate , setstate]  = useState("Home");
        

  return (
    <>
    <PostListProvider>
    <div className='app-container'> 
    <Sidebar curstate={curstate} setstate={setstate}></Sidebar>
    <div className='cont'>
    <Header></Header> 
    {curstate === "Home" ? (<PostList></PostList>)
    : (<CreatePost></CreatePost>)} 
    
    
     <Footer></Footer>
    </div>
    
    </div>
    </PostListProvider>
    
  
    </>
    

    
  )
}

export default App
