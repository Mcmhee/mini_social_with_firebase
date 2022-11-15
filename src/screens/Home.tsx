import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { PostContainer } from "../component/PostContainer";
import { DB } from "../config/FirebaseConfig";


interface postModel {
    author: string;
    id: string;
    posts: string;
}

export const Home = () => {

    const [post , setPost] = useState<postModel[] | null>(null);

    //
    const collectionRef = collection(DB, 'post');
  
    

    useEffect(()=>{
        getPost();
    }, []);

    
    const getPost = async () => {
        const data = await getDocs(collectionRef)

        if (data != null){
           const listOfPost = data.docs.map((doc) =>({
            ...doc.data(), id: doc.id
           })) as postModel[]

           setPost(listOfPost)
        }
    }

    return (
        <div>
            <h1> Posts</h1>
            {
             post != null ?   post.map((item) => {
                    
                    return <PostContainer author={item.author} posts={item.posts} postId={item.id} />
                        
                    
                }) : <h1> no post</h1>
            }
        </div>
    )

}
