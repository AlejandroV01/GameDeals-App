import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { Button, Input, InputGroup } from 'rsuite'
import { auth } from '../../../config/firebase-config'
import useGlobalStore from '../../../globalStore/useGlobalStore'
import styles from '../Login.module.css'
const SignUp = () => {
    const [changeAccountInfo, accountInfo] = useGlobalStore((state) => [
        state.changeAccountInfo,
        state.accountInfo,
    ])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const handleSignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                user.displayName = name
                updateProfile(user, { displayName: name })

                changeAccountInfo(user)

                toast.success('Successfully Signed Up!', {
                    position: 'bottom-right',
                    theme: 'dark',
                })
            })
            .catch((error) => {
                const errorCode = error.code
                toast.error(`Error Signing Up. ${errorCode}`, {
                    position: 'bottom-right',
                    theme: 'dark',
                })
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
                        value={email}
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
                        value={name}
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
                        value={password}
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
                    SIGN UP {accountInfo.displayName}
                </Button>
            </form>
        </div>
    )
}

export default SignUp
