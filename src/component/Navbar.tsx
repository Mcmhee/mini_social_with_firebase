import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom"
import { auth } from "../config/FirebaseConfig";

export const Nav = () => {

   
  //
  const logOut = async () => {
    await signOut(auth);
  }

  //
  const [user, loading] = useAuthState(auth)

    //
    return (
        <nav>
        <div>
        <Link className='links' to="/"> Home </Link>
        {user != null? <Link className='links' to="/CreatePost"> Create Post </Link> : null}
        </div>
       

       { user != null ? 
          <div className="userDetails">
            <img src={user?.photoURL ?? ""}></img>
            <p>{user?.displayName}</p>
            <button onClick={logOut}> Log out</button>
          </div> :

         <div>
          <Link className='links' to="/Login"> LogIn </Link>
         </div>
      }
        </nav>
    )

}
