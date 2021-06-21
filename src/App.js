import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Nav from './components/Nav'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
