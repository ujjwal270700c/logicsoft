import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
 
    <Suspense fallback="Loading...">
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Header />
              <Switch>
                <Route exact path="/" component={React.lazy(() => import("./components/Home/Home"))} />
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;

