import React from 'react';
import { useContext } from 'react';
import * as firebase from "firebase/app";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png'
import './Login.css';
import { signInWithGoogle, initializedFramework } from './LoginManager';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    initializedFramework()
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            setLoggedInUser(result);
            storeAuthToken();
            history.replace(from)
        })
    }

    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('idToken', idToken)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='login-sec'>
            <Link to='/'><img className='logo' src={logo} alt="Website logo"/></Link>
            <div className="login-area">
                <h3 className='login-title'>Login With</h3>
                <button onClick={handleGoogleSignIn} className="loginBtn loginBtn--google">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;