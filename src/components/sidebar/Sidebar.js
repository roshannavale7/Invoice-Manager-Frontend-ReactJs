import "./sidebar.css"
import {Dashboard,People,Description,Payment,LocalMall,Assessment,Person,Settings} from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <Link to="/dashboard" exact ><h3 className="sidebarItems active"><Dashboard className="sidebarIcons"/>Dashboard</h3></Link>
          <Link to="/clients" exact ><h3 className="sidebarItems"><People className="sidebarIcons"/>Clients</h3></Link>
          <Link to="/invoices" exact ><h3 className="sidebarItems"><Description className="sidebarIcons"/>Invoices</h3></Link>
          <Link to="/payments" exact ><h3 className="sidebarItems"><Payment className="sidebarIcons"/>Payments</h3></Link>
          <Link to="/products" exact ><h3 className="sidebarItems"><LocalMall className="sidebarIcons"/>Products</h3></Link>
          <Link to="/reports" exact ><h3 className="sidebarItems"><Assessment className="sidebarIcons"/>Reports</h3></Link>
          <Link to="/users" exact ><h3 className="sidebarItems"><Person className="sidebarIcons"/>Users & Roles</h3></Link>
          <Link to="/settings" exact ><h3 className="sidebarItems"><Settings className="sidebarIcons"/>Settings</h3></Link>
        </div>
      </div>
    </div>
  )
}
