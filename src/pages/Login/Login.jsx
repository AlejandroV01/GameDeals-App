import {
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    TwitterAuthProvider,
} from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import React, { useState } from 'react'
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs'
import { Button, Divider, IconButton, Stack } from 'rsuite'
import useGlobalStore from '../../globalStore/useGlobalStore'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import styles from './Login.module.css'
const Login = () => {
    const [isSignedIn, changeIsSignedIn, accountInfo, changeAccountInfo] =
        useGlobalStore((state) => [
            state.isSignedIn,
            state.changeIsSignedIn,
            state.accountInfo,
            state.changeAccountInfo,
        ])
    const googleProvider = new GoogleAuthProvider()
    const twitterProvider = new TwitterAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const auth = getAuth()
    const [signInError, setSignInError] = useState(false)
    const loginWithProvider = (provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                let credential
                if ((provider = googleProvider)) {
                    credential = GoogleAuthProvider.credentialFromResult(result)
                } else if ((provider = twitterProvider)) {
                    credential =
                        TwitterAuthProvider.credentialFromResult(result)
                } else {
                    credential =
                        FacebookAuthProvider.credentialFromResult(result)
                }

                const token = credential.accessToken
                const user = result.user
                changeAccountInfo(user)
                console.log(token, user)
                changeIsSignedIn(true)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                setSignInError(true)
                console.log(errorCode, errorMessage, email, credential)
            })
    }
    const [isSignIn, setIsSignIn] = useState(true)
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.wholeLoginContainer}>
                    <div className={styles.tabSwitch}>
                        <div
                            className={`${styles.signTabs} ${
                                isSignIn ? styles.activeTab : styles.unActiveTab
                            }`}
                            onClick={() => setIsSignIn(true)}
                        >
                            <h4>Sign in</h4>
                        </div>
                        <div
                            className={`${styles.signTabs} ${
                                !isSignIn
                                    ? styles.activeTab
                                    : styles.unActiveTab
                            }`}
                            onClick={() => setIsSignIn(false)}
                        >
                            <h4>Sign up</h4>
                        </div>
                    </div>
                    <div className={styles.providerLogins}>
                        <IconButton
                            icon={<BsGoogle />}
                            className={`${styles.brandButtons} ${styles.google}`}
                            onClick={() => loginWithProvider(googleProvider)}
                        />
                        <IconButton
                            icon={<BsTwitter />}
                            className={`${styles.brandButtons} ${styles.twitter}`}
                            onClick={() => loginWithProvider(twitterProvider)}
                        />
                        <IconButton
                            icon={<BsFacebook />}
                            className={`${styles.brandButtons} ${styles.facebook}`}
                            onClick={() => loginWithProvider(facebookProvider)}
                        />
                    </div>
                    <Divider style={{ color: 'white' }}>OR USE EMAIL</Divider>
                    <div className={styles.loginContainer}>
                        {isSignIn ? <SignIn /> : <SignUp />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
