import "./sidebar.css"
import {Dashboard,People,Description,Payment,LocalMall,Assessment,Person,Settings} from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarItems active"><Dashboard className="sidebarIcons"/>Dashboard</h3>
          <h3 className="sidebarItems"><People className="sidebarIcons"/>Clients</h3>
          <h3 className="sidebarItems"><Description className="sidebarIcons"/>Invoices</h3>
          <h3 className="sidebarItems"><Payment className="sidebarIcons"/>Payments</h3>
          <h3 className="sidebarItems"><LocalMall className="sidebarIcons"/>Products</h3>
          <h3 className="sidebarItems"><Assessment className="sidebarIcons"/>Reports</h3>
          <h3 className="sidebarItems"><Person className="sidebarIcons"/>Users & Roles</h3>
          <h3 className="sidebarItems"><Settings className="sidebarIcons"/>Settings</h3>
        </div>
      </div>
    </div>
  )
}
