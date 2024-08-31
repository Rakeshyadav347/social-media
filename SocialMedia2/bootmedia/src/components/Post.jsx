
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "./store/post-list-store";
function Post ({post}){

   const {deletePost} = useContext(PostList);

  return ( 
  <div className="card" style={{width: "40rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete onClick={()=> deletePost(post.id)} />
    <span className="visually-hidden"></span>
  </span>
    
    <p className="card-text">{post.body}</p>
    {post.tags.map((postss)=> <span key={postss} className="badge text-bg-primary">{postss}</span>)}
    <div className="alert alert-success" role="alert">
  This post have {post.reactions.likes} likes, {post.reactions.dislikes} dislikes by  people
</div>
  </div>
</div>
  )
}
export default Post;