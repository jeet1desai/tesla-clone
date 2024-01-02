import "./App.css";
import Home from "./pages/Home";
import ModelS from "./pages/ModelS";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ModelS" component={ModelS} />
      </Switch>
    </>
  );
}

export default App;

//animation npm i react-reveal --save
