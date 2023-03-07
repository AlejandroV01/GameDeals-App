import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Stack } from 'rsuite'
import useGlobalStore from '../../globalStore/useGlobalStore'
import styles from './Header.module.css'
const Header = () => {
    const [isSignedIn, accountInfo] = useGlobalStore((state) => [
        state.isSignedIn,
        state.accountInfo,
    ])

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <h1>
                    <a href='/'>GameDeals</a>
                </h1>

                <div className={styles.buttons}>
                    {isSignedIn ? (
                        <div className={styles.buttonStack}>
                            <Avatar
                                as={Link}
                                to='/login'
                                referrerPolicy='no-referrer'
                                src={accountInfo.reloadUserInfo.photoUrl}
                            />
                            <Button
                                as={Link}
                                to='/login'
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
