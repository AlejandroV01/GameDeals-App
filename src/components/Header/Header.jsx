import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Avatar, Button, Stack } from 'rsuite'
import useGlobalStore from '../../globalStore/useGlobalStore'
import styles from './Header.module.css'
const Header = () => {
    const [changeIsSignedIn, isSignedIn, accountInfo, changeAccountInfo] =
        useGlobalStore((state) => [
            state.changeIsSignedIn,
            state.isSignedIn,
            state.accountInfo,
            state.changeAccountInfo,
        ])

    const handleSignOut = (e) => {
        e.preventDefault()
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                changeIsSignedIn(false)
                changeAccountInfo(null)
                toast.success('Successfully Signed Out!', {
                    position: 'bottom-right',
                    theme: 'dark',
                })
            })
            .catch((err) => {
                console.log(err)
                const errorCode = err.code
                toast.error(`Error Signing Out. ${errorCode}`, {
                    position: 'bottom-right',
                    theme: 'dark',
                })
            })
    }
    console.log(accountInfo)
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <h1>
                    <a href='/'>GameDeals</a>
                </h1>
                <div className={styles.buttons}>
                    {isSignedIn ? (
                        <div className={styles.buttonStack}>
                            {accountInfo.photoURL ? (
                                <Avatar
                                    as={Link}
                                    to='/login'
                                    referrerPolicy='no-referrer'
                                    src={accountInfo.photoURL}
                                />
                            ) : (
                                <h4 as={Link} to='/login'>
                                    {accountInfo.displayName}
                                </h4>
                            )}
                            <Button
                                onClick={handleSignOut}
                                color='cyan'
                                appearance='ghost'
                            >
                                Sign Out
                            </Button>
                        </div>
                    ) : (
                        <Stack direction='row' spacing={15}>
                            <Button
                                as={Link}
                                to='/login'
                                color='cyan'
                                appearance='ghost'
                            >
                                Get Started
                            </Button>
                            <Button
                                as={Link}
                                to='/login'
                                color='cyan'
                                appearance='primary'
                            >
                                Login
                            </Button>
                        </Stack>
                    )}
                </div>

                <div className={styles.navMenu}></div>
            </div>
        </div>
    )
}
export default Header
