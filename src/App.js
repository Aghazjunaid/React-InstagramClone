import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/category" component={Category} />
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/orders" component={Orders} />
          <PrivateRoute path="/users" component={User} /> */}

          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
