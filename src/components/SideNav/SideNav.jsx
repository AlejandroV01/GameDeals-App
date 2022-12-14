import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle'
import GroupIcon from '@rsuite/icons/legacy/Group'
import MagicIcon from '@rsuite/icons/legacy/Magic'
import React from 'react'
import { Nav, Sidenav } from 'rsuite'

const SideNav = () => {
  return (
    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={['3', '4']} appearance='subtle'>
        <Sidenav.Body>
          <Nav activeKey='1'>
            <Nav.Item eventKey='1' icon={<DashboardIcon />}>
              Home
            </Nav.Item>
            <Nav.Item eventKey='2' icon={<GroupIcon />}>
              Search
            </Nav.Item>
            <Nav.Menu eventKey='3' title='Advanced' icon={<MagicIcon />}>
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
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  )
}

export default SideNav
