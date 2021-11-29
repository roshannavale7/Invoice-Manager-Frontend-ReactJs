import React from 'react'
import "./topbar.css"
import { NotificationsNone,Language } from '@material-ui/icons';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topLeft">
              <img src="https://billar.gainhq.com/images/logo.png" alt="img" className="logo" />          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <NotificationsNone/>
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Language/>
                  <span className="topIconBadge">2</span>
              </div>
              <img src="https://billar.gainhq.com/images/avatar-demo.jpg" alt="" className="topAvtar" />
                        </div>
      </div>
    </div>
  )
}
