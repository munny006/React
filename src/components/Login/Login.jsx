import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        // console.log("google mama is coming")
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInuser = result.user;
                console.log(loggedInuser);
                setUser(loggedInuser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>


            {
                user ?
                    <button onClick={handleGoogleSignOut}>SignOut</button> :
                    <>
                        <button onClick={handleGoogleSignIn}> Google Login </button>
                        <button onClick={handleGithubSignIn}> Github Login</button>
                    </>
            }


            {user && <div>
                <h3>User : {user?.displayName}</h3>
                <p>Email : {user.email}</p>
                <img src={user.photoURL} />
            </div>
            }

        </div>
    );
};

export default Login;