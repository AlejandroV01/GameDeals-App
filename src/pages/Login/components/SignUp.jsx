import { type } from '@testing-library/user-event/dist/type'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
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
    const handleSignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                console.log('success sign up')
                toast.success('Successfully Signed Up!', {
                    position: 'bottom-right',
                    theme: 'dark',
                })
            })
            .catch((error) => {
                const errorCode = error.code
                toast.error('Error Signing Up.', {
                    position: 'bottom-right',
                    theme: 'dark',
                })
                alert(errorCode)
            })
    }

    return (
        <div className={styles.signInContainer}>
            <form className={styles.inputContainer} onSubmit={handleSignUp}>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineMail size={18} />
                    </InputGroup.Addon>
                    <Input
                        placeholder='Email'
                        type='email'
                        onChange={(e) => setEmail(e)}
                        required
                    />
                </InputGroup>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineUser size={18} />
                    </InputGroup.Addon>
                    <Input
                        placeholder='Name'
                        onChange={(e) => setName(e)}
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
                        onChange={(e) => setPassword(e)}
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

            <ToastContainer />
        </div>
    )
}

export default SignUp
