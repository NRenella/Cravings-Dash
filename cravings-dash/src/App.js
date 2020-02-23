import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import OrdersList from "./components/orders-list.component";
import EditOrder from "./components/edit-order.component";
import CreateOrder from "./components/create-order.component";
import CreateProfile from "./components/create-profile.component";

function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>
        <Route path="/" exact component={OrdersList} />
        <Route path="/edit/:id" exact component={EditOrder} />
        <Route path="/create" exact component={CreateOrder} />
        <Route path="/profile" exact component={CreateProfile} />
      </div>
    </Router>
  );
}

export default App;
