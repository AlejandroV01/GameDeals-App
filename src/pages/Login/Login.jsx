import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import 'firebase/compat/auth'
import React, { useState } from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'
import { Divider, IconButton } from 'rsuite'
import useGlobalStore from '../../globalStore/useGlobalStore'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import styles from './Login.module.css'
const Login = () => {
    const [changeIsSignedIn, changeAccountInfo] = useGlobalStore((state) => [
        state.changeIsSignedIn,
        state.changeAccountInfo,
    ])
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const auth = getAuth()
    const loginWithProvider = (provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                let credential
                if ((provider = googleProvider)) {
                    credential = GoogleAuthProvider.credentialFromResult(result)
                } else {
                    credential = GithubAuthProvider.credentialFromResult(result)
                }

                const token = credential.accessToken
                const user = result.user
                changeAccountInfo(user)
                console.log(token, user)
                changeIsSignedIn(true)
                toast.success('Login Success!', {
                    position: 'bottom-right',
                    theme: 'dark',
                })
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                toast.error('Login Error, Try Again.', {
                    position: 'bottom-right',
                    theme: 'dark',
                })
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
                            icon={<BsGithub />}
                            className={`${styles.brandButtons} ${styles.github}`}
                            onClick={() => loginWithProvider(githubProvider)}
                        />
                    </div>
                    <Divider style={{ color: 'white' }}>OR USE EMAIL</Divider>
                    <div className={styles.loginContainer}>
                        {isSignIn ? <SignIn /> : <SignUp />}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
