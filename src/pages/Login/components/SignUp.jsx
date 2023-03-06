import React from 'react'
import { Button } from 'rsuite'
import styles from '../Login.module.css'
const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.providerLogins}></div>
      <p>OR USE EMAIL</p>
      <div className={styles.inputContainer}>
        <input type='text' />
        <input type='text' />
      </div>
      <Button color='cyan' appearance='primary'>
        Sign Up
      </Button>
      <a href='https://google.com'>Forgot Password</a>
    </div>
  )
}

export default SignUp
