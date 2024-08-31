
import { useContext, useEffect ,useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./store/post-list-store";
import LoadingState from "./LoadingState";

function PostList () {
 const {postList,fetching} = useContext(PostListData);
 
  return <>
  {fetching && <LoadingState></LoadingState>}
   {!fetching && postList.map((post)=>
    <Post key={post.id} post={post}></Post>
   )}
  </>
  
}
export default PostList;