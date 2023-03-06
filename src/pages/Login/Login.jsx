import React, { useState } from 'react'
import { Button } from 'rsuite'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import styles from './Login.module.css'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.tabSwitch}>
          <div className={`${styles.signTabs} ${isSignIn && styles.activeTab}`}>
            <h4>Sign in</h4>
          </div>
          <div className={`${styles.signTabs} ${!isSignIn && styles.activeTab}`}>
            <h4>Sign up</h4>
          </div>
        </div>
        <div className={styles.loginContainer}>{isSignIn ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  )
}

export default Login
