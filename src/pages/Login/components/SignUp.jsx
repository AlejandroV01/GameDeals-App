import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Button, Input, InputGroup } from 'rsuite'
import { auth } from '../../../config/firebase-config'
import useGlobalStore from '../../../globalStore/useGlobalStore'
import styles from '../Login.module.css'
const SignUp = () => {
    const [changeAccountInfo] = useGlobalStore((state) => [
        state.changeAccountInfo,
    ])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                console.log('success sign up')
            })
            .catch((error) => {
                const errorCode = error.code
                alert(errorCode)
            })
    }

    return (
        <div className={styles.signInContainer}>
            <form
                className={styles.inputContainer}
                onSubmit={() => handleSignUp(auth)}
            >
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineMail size={18} />
                    </InputGroup.Addon>
                    <Input
                        placeholder='Email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </InputGroup>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineUser size={18} />
                    </InputGroup.Addon>
                    <Input
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </InputGroup>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineLock size={18} />
                    </InputGroup.Addon>
                    <Input
                        placeholder='Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </InputGroup>
                <Button
                    color='cyan'
                    appearance='primary'
                    className={styles.actionButton}
                    type='submit'
                >
                    SIGN UP
                </Button>
            </form>

            {/* <a href='https://google.com'>Forgot Password</a> */}
        </div>
    )
}

export default SignUp
