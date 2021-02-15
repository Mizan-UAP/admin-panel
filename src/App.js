import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddProduct from "./Component/AddProduct/AddProduct";

import Home from "./Component/Home/Home";
import ViewProduct from "./Component/ViewProduct/ViewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/addProduct">
            <AddProduct/>
          </Route>
          <Route path="/viewProduct">
            <ViewProduct/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
