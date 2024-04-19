import React from 'react'
import SideBar from './sidebar';
import UserDropdown from './userdropdown';
import { Helmet } from 'react-helmet';

function Notification() {
  return (
    <div>
        <Helmet>
            <title>
                Notification
            </title>
        </Helmet>
      <SideBar />
      <UserDropdown / >

    </div>
  )
}

export default Notification;
