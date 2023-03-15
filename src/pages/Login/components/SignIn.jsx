import {
    browserLocalPersistence,
    setPersistence,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { Button, Input, InputGroup } from 'rsuite'
import { auth } from '../../../config/firebase-config'
import useGlobalStore from '../../../globalStore/useGlobalStore'
import styles from '../Login.module.css'
const SignIn = () => {
    const [changeIsSignedIn, changeAccountInfo] = useGlobalStore((state) => [
        state.changeIsSignedIn,
        state.changeAccountInfo,
    ])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleToast = (text) => {
        toast.error(`${text}`, {
            position: 'bottom-right',
            theme: 'dark',
        })
    }
    const handleSignIn = (e) => {
        e.preventDefault()
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user
                        changeIsSignedIn(true)
                        changeAccountInfo(user)
                        toast.success('Successfully Logged In!', {
                            position: 'bottom-right',
                            theme: 'dark',
                        })
                    })
                    .catch((error) => {
                        const errorCode = error.code
                        if (errorCode === 'auth/user-not-found') {
                            handleToast('User Not Found, Try Again.')
                        } else if (errorCode === 'auth/wrong-password') {
                            handleToast('Wrong Password, Try Again.')
                        } else {
                            handleToast(`Error Logging In. ${errorCode}`)
                        }
                    })
            })
            .catch((error) => {
                toast.error('error on persistence')
                console.log(error)
            })
    }
    return (
        <div className={styles.signInContainer}>
            <form className={styles.inputContainer} onSubmit={handleSignIn}>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineMail size={18} />
                    </InputGroup.Addon>
                    <Input
                        placeholder='Email'
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e)}
                    />
                </InputGroup>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineLock size={18} />
                    </InputGroup.Addon>
                    <Input
                        placeholder='Password'
                        type='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e)}
                    />
                </InputGroup>
                <Button
                    color='cyan'
                    appearance='primary'
                    className={styles.actionButton}
                    type='submit'
                >
                    SIGN IN
                </Button>
            </form>

            {/* <a href='https://google.com'>Forgot Password</a> */}
        </div>
    )
}

export default SignIn
