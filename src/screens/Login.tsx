import { sign } from 'crypto'
import { signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../config/FirebaseConfig'

export const Login = () => {

    //
    const navigate = useNavigate();

    //
    const onClick = async() => {
     const result = await signInWithPopup(auth,provider);

     if (result != null){
        navigate('/')
     }
     
    }



    //
    return (
        <div>
            <button onClick={onClick}> Signin with Google </button>
        </div>
    )

}
