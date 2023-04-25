import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup ,signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import './Login.css';


const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        // console.log('google mama is coming');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleSignOut = () => {


        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <div>



            {
                user ?
         
              <button onClick={handleSignOut} className='signout'>Sign out</button> :
              <>
                <button onClick={handleGoogleSignIn} className='google'>Google Login</button>
                <button onClick={handleGithubSignIn}>Github Login</button>

                </>
            
            }
            
            {user && <div>
                <h3>User : {user?.displayName}</h3>
                <p>email:{user.email}</p>
                <img src={user.photoURL}></img>
            </div>
            }
        </div>
    );
};

export default Login;