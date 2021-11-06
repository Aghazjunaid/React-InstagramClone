import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup/Signup';
import Protected from './helpers/ProtectedRoute/Protected';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Protected component={Home} />
          </Route>
          <Route path="/profile" exact>
            <Protected component={Profile} />
          </Route>
          
          {/* <Route path="/update/:id">
            <Protected component={UpdateProduct} />
          </Route>  */}

          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
