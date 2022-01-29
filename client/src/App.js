import './App.css';
import Home from './views/Home';
import EditUser from './views/EditUser';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/edit/user/:id">
              <EditUser/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;