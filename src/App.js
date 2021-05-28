import { Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home'
import Posts from './pages/posts/Posts'
import Profile from './pages/Profile'
import Login from './pages/login/Login'
import {useSelector} from 'react-redux'

function App() {

  const {isLoggedIn} = useSelector(state => state.loginReducer)

  return (
    <div className='App'>
        <Navbar />

        {isLoggedIn
          ?
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/profile" component={Profile}></Route>
          </Switch>
          :
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        }

    </div>
  );
}

export default App;
