import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
<<<<<<< HEAD
=======
import VideoItemDetails from './components/VideoItemDetails'
>>>>>>> modiifed
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
<<<<<<< HEAD
=======
    <Route exact path="/videos/:id" component={VideoItemDetails} />
>>>>>>> modiifed
  </Switch>
)

export default App
