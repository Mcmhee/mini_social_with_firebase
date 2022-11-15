import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, DB } from '../config/FirebaseConfig';
import '../Css/PostContainer.css'

interface postContainerModel {
    author: string;
    posts: string;
    postId: string;
   
}



export const PostContainer = (props:postContainerModel) => {

     //
    const collectionRef = collection(DB, 'likes');
    const likesquery = query(collectionRef, where("postID","==", props.postId))

    const [like , setLikes] = useState(0);



    //
    useEffect(()=>{
        getLikes();
    }, []);
                    
    

    
    const addlike = async () => {
      const result = await addDoc(collectionRef,{
           userWhoLikesId: auth.currentUser?.uid,
           postID: props.postId,  
       });

       if(result){
        getLikes()
       }
   }

   const getLikes = async () => {
    const result = await getDocs(likesquery);
    if (result != null){
        setLikes(result.docs.length)
     }
    }






    //
    return (
        <div onClick={addlike} className='postContainer' >
            <h2 className='header'>{props.posts}</h2>
            <div>
                <p className='author'>@{props.author}</p> 
                <p className='author'>Likes:{like}</p>
            </div>
        </div>
    )
}