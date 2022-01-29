import './App.css';
import Home from './views/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/home">
              <Home/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;