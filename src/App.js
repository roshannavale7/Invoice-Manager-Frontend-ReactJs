import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <div className="App">
      <Router>
        <Topbar />
        <div className="container">
            <Sidebar />
            <Switch>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/products" component={Products} />
            </Switch>
        </div>        
      </Router>
  </div>
  );
}

export default App;
