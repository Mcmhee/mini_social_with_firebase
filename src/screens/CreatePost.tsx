import {useForm} from 'react-hook-form'
import '../Css/CreatePost.css'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers/yup'
import {addDoc, collection, CollectionReference} from 'firebase/firestore'
import { auth, DB } from '../config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'



interface PostModel {
    post: string
}


export const CreatePost = () => {

    //
    const navigate = useNavigate();


    const schema = yup.object().shape({
        post: yup.string().required("please enter a text").max(225)
    });

    const {register, handleSubmit, formState: {errors}} = useForm<PostModel>({
        resolver: yupResolver(schema)
    });

    //
   const collectionRef = collection(DB, 'post');

    
    const submit = async (data: PostModel) => {
   

       const result = await addDoc(collectionRef,{
            posts: data.post,
            author: auth.currentUser?.displayName,
            id: auth.currentUser?.uid,
            
        });

        console.log(result)

        if(result != null){

            navigate('/')
        }
    }

    return (
        <div>
            <h1>Create post</h1>

            <form onSubmit={ handleSubmit(submit)} className="form">
                <label> Whats on your mind </label>
                <textarea {...register("post")} />
               {errors.post?.message && <p style={{color:"red"}}>{errors.post?.message}</p> }
                <div> <input type="submit" value="Post" /> </div> 
            </form>
        </div>
    )
}