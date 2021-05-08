import logo from './logo.svg';
import './styles/App.scss';
import { Button,Card} from 'react-bootstrap';
import Home from './views/Home'
import Post from './views/Post'
import UserRecord from './views/UserRecord'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
function App() {
  return (
    <Router basename="/">
    <div>
      <main>
        <Switch>
        <Route path="/post/:id">
          <Post />
       </Route>
       <Route path="/user/:author">
          <UserRecord />
       </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
  );
}

export default App;
