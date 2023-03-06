import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import React, { useState } from 'react'
import { BsApple, BsGoogle, BsMicrosoft } from 'react-icons/bs'
import { Button, Divider, IconButton, Stack } from 'rsuite'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import styles from './Login.module.css'
const Login = () => {
    const loginWithGoogle = () => {
        firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((userCred) => console.log(userCred))
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
                            onClick={loginWithGoogle}
                        />
                        <IconButton
                            icon={<BsApple />}
                            className={`${styles.brandButtons} ${styles.apple}`}
                        />
                        <IconButton
                            icon={<BsMicrosoft />}
                            className={`${styles.brandButtons} ${styles.microsoft}`}
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
