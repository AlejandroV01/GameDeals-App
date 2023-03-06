import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack } from 'rsuite'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h1>
          <a href='/'>GameDeals</a>
        </h1>

        <div className={styles.buttons}>
          <Stack direction='row' spacing={15}>
            <Button as={Link} to='/login' color='cyan' appearance='ghost'>
              Get Started
            </Button>
            <Button
              as={Link}
              to='/login'
              color='cyan'
              appearance='primary'
              onClick={() => {
                alert('Feature Coming Soon!')
              }}
            >
              Login
            </Button>
          </Stack>
        </div>

        <div className={styles.navMenu}></div>
      </div>
    </div>
  )
}
export default Header
