import { useContext, useRef } from "react";
import { PostList } from "./store/post-list-store";

function CreatePost () {
 
       const {addPost} = useContext(PostList)
       const userIdElement =useRef();
       const titleElement =useRef();
       const bodyElement =useRef();
       const reactionsElement =useRef();
       const tagsElement =useRef();
  
       const handleSubmit=(event)=>{
        event.preventDefault();
       const  userId = userIdElement.current.value;
       const  Posttitle = titleElement.current.value;
       const  Postbody = bodyElement.current.value;
       const  Postreactions = reactionsElement.current.value;
       const  Posttags = tagsElement.current.value.split(" ");

       userIdElement.current.value = "";
       titleElement.current.value = "";
       bodyElement.current.value = "";
       reactionsElement.current.value="";
       tagsElement.current.value="";

       fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId:userId,
          title:Posttitle,
          body:Postbody,
          reactions :Postreactions,
          tags:Posttags,
        })
      })
      .then(res => res.json())
      .then(post => addPost(post));


       
       }

   return (
    <form className="create-post" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="userid" className="form-label">Enter user id </label>
      <input type="text" ref={userIdElement} className="form-control" id="userid"  placeholder=" user id "/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title </label>
      <input type="text" ref={titleElement} className="form-control" id="title"  placeholder=" enter post title "/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="content" className="form-label">Post Content </label>
      <textarea rows="4" type="text" ref={bodyElement} className="form-control" id="content"  placeholder=" Enter Post Content "/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="reacts" className="form-label">Post Reacts </label>
      <input type="text" ref={reactionsElement} className="form-control" id="reacts"  placeholder="Enter Post Reacts "/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label"> Post Hashtags </label>
      <input type="text" ref={tagsElement} className="form-control" id="tags"  placeholder=" enter Your Hashtags here "/>
      
    </div>
    
    <button type="submit" className="btn btn-primary">Post</button>
  </form>

   )
}

export default CreatePost;