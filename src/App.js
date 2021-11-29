import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return <div><Topbar/>
  <div className="container">
    <Sidebar/>
    <Dashboard/>
  
  </div>

  </div>;
  
}

export default App;
