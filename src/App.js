import "./App.css";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";
import Fruits from "./pages/fruits";
import { Character } from "./pages/characterPage/character";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/fruits">
            <Fruits />
          </Route>
          <Route exact path="/character/:id">
            <Character />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
