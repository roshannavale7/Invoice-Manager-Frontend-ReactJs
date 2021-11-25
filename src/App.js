import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import InvoiceTable from "./components/InvoiceTable";
import InvoiceTableDeco from "./components/InvoiceTableDeco";
import "./App.css"
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return <div><Topbar/>
  <div className="container">
    <Sidebar/>
    <div  style={{flex:6}}>
    <InvoiceTableDeco/>
    <InvoiceTable />
    </div>
    
    
  
  </div>
  
  </div>;
  
}

export default App;
