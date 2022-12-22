import GroupIcon from '@rsuite/icons/legacy/Group'
import SiteIcon from '@rsuite/icons/Site'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Sidenav } from 'rsuite'
import styles from './SideNav.module.css'
const SideNav = () => {
  const [selectedPage, setSelectedPage] = useState(0)

  return (
    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={['3', '4']} appearance='subtle'>
        <Sidenav.Body>
          <Nav activeKey='1'>
            <Nav.Item as={Link} to='/' icon={<SiteIcon />} onSelect={() => setSelectedPage(0)}>
              <div className={selectedPage === 0 && styles.pageDisable}>Home</div>
            </Nav.Item>
            <Nav.Item as={Link} to='/search' icon={<GroupIcon />} onSelect={() => setSelectedPage(1)}>
              <div className={selectedPage === 1 && styles.pageDisable}>Search</div>
            </Nav.Item>

            {/* <Nav.Menu eventKey='3' title='Advanced' icon={<MagicIcon />}>
              <Nav.Item eventKey='3-1'>Geo</Nav.Item>
              <Nav.Item eventKey='3-2'>Devices</Nav.Item>
              <Nav.Item eventKey='3-3'>Loyalty</Nav.Item>
              <Nav.Item eventKey='3-4'>Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey='4' title='Settings' icon={<GearCircleIcon />}>
              <Nav.Item eventKey='4-1'>Applications</Nav.Item>
              <Nav.Item eventKey='4-2'>Channels</Nav.Item>
              <Nav.Item eventKey='4-3'>Versions</Nav.Item>
              <Nav.Menu eventKey='4-5' title='Custom Action'>
                <Nav.Item eventKey='4-5-1'>Action Name</Nav.Item>
                <Nav.Item eventKey='4-5-2'>Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu> */}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  )
}

export default SideNav
