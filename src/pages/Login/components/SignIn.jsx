import React from 'react'
import { Button } from 'rsuite'
import styles from '../Login.module.css'
const SignIn = () => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.providerLogins}></div>
      <p>OR USE EMAIL</p>
      <div className={styles.inputContainer}>
        <input type='text' />
        <input type='text' />
      </div>
      <Button color='cyan' appearance='primary'>
        Sign In
      </Button>
      <a href='https://google.com'>Forgot Password</a>
    </div>
  )
}

export default SignIn
