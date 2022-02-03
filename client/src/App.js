
import Home from './views/Home';
import EditUser from './views/EditUser';
import SignUp from './views/SignUp';
import Index from './views/Index';
import LoginPage from './views/LoginPage';
import CatagoryShow from './views/CatagoryShow';
import MovieDetails from './views/MovieDetails';
import Search from './views/Search';
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
              <EditUser />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/catagory/:catagory">
              <CatagoryShow />
            </Route>
            <Route exact path="/movie/details/:id">
              <MovieDetails />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;