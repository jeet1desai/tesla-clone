import Home from "./pages/Home";
import ModelS from "./pages/ModelS";
import { Switch, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ModelS" component={ModelS} />
        <Route exact path="/ModelX" component={ModelS} />
      </Switch>
    </>
  );
}

export default App;
