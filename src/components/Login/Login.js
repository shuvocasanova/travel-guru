import React, { useContext, useState } from 'react';
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import './Login.css';
import googleIcon from '../../images/Icon/google.png';
import fbIcon from '../../images/Icon/fb.png';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    });

    initializeLoginFramework();


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
        console.log(handleGoogleSignIn);

    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser({ ...res, name: res.displayName });
        if (redirect) {
            history.replace(from);


        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            const isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!isFieldValid) {
                alert("Please enter correct email address");
            }
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && passwordHasNumber);
            if (newUser) {
                if (!isPasswordValid) {
                    alert("Please enter minimum 6 character with number value");
                }
            }

        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {



        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)

                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    console.log(res);
                    handleResponse(res, true)
                })
        }

        e.preventDefault();
    }



    return (
        <div className="login-page" style={{ textAlign: 'center' }}>

            <form className="form-style " onSubmit={handleSubmit}>
                <h1 > {newUser ? 'Create an account' : 'Log In'}</h1>

                {
                    newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />
                }
                <br />
                <br />
                <input type="email" name="email" onBlur={handleBlur} placeholder="Enter email address" required />

                <br />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                <br />
                <br />
                {
                    newUser && <input type='password' name='password' onBlur={handleBlur} placeholder='Confirm password' />
                }
                <br />
                <br />
                <input type="submit" className="signIn-button" value={newUser ? 'Sign Up' : 'Sign In'} />
            </form>

            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>
            }

            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser"> <strong>Don't have an account? Sign Up</strong> </label>


            <h5>Or</h5>


            <Button onClick={googleSignIn}
                style={{ alignItems: 'center', backgroundColor: '#fff', border: '1px solid gray', borderRadius: '40px', marginBottom: '10px', marginLeft: '20px', width: '24%', height: '40px', color: 'green' }}>
                <img src={googleIcon} className="google-icon" alt="" /> Continue with Google  </Button>


            <br />
            <Button onClick={fbSignIn}
                style={{ backgroundColor: '#fff', border: '1px solid gray', borderRadius: '40px', width: '24%', marginBottom: '20px', marginLeft: '20px', height: '40px', color: 'blue' }}>
                <img src={fbIcon} className="fb-icon" alt="" />Continue with Facebook </Button>


        </div>
    );
};

export default Login;