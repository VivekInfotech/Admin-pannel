import Mainbody from './components_admin/Mainbody';
import './App.css';
import Login from './Pages_admin/Login';
import WebBody from './components/WebBody';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Authors from './pages/Authors';
import Icons from './pages/Icons';
import Interfaceicon from './pages/Interfaceicon';
import Topicon from './pages/Topicon';
import Animatedicons from './pages/Animatedicons';
import Pack from './pages/Pack';
import Topanimatedicon from './pages/Topanimatedicon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";    

function App() {
  return (
    <>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/mainbody">
          <Mainbody />
        </Route>
        
      <Router>
        <Navbar />
        
        <Switch >
          <Route exact path='/'>
            <WebBody />
          </Route>
          <Route  path='/authors'>
            <Authors />
          </Route>
          <Route  path='/icons'>
            <Icons />
          </Route>
          <Route  path='/interface-icons'>
            <Interfaceicon />
          </Route>
          <Route  path='/animated-icons'>
            <Animatedicons />
          </Route>
          <Route path="/most-downloads">
            <Topicon />
          </Route>
          <Route path="/pack">
            <Pack />
          </Route>
          <Route path="/Topanimatedicon">
            <Topanimatedicon />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
