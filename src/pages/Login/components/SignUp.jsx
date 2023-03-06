import React from 'react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Button, Input, InputGroup } from 'rsuite'
import styles from '../Login.module.css'
const SignUp = () => {
    const handleSignUp = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.signInContainer}>
            <form className={styles.inputContainer} onSubmit={handleSignUp}>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineMail size={18} />
                    </InputGroup.Addon>
                    <Input placeholder='Email' type='email' required />
                </InputGroup>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineUser size={18} />
                    </InputGroup.Addon>
                    <Input placeholder='Name' required />
                </InputGroup>
                <InputGroup style={styles}>
                    <InputGroup.Addon>
                        <AiOutlineLock size={18} />
                    </InputGroup.Addon>
                    <Input placeholder='Password' type='password' required />
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
