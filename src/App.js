import Mainbody from './components_admin/AdminLayout';
import './App.css';
import Login from './Pages_admin/Login';
import WebBody from './components/WebBody';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Icons from './pages/Icons';
import Interfaceicon from './pages/Interfaceicon';
import Topicon from './pages/Topicon';
import Animatedicons from './pages/Animatedicons';
import Pack from './pages/Pack';
import Topanimatedicon from './pages/Topanimatedicon';


//admin pages
import AdminLayout from './components_admin/AdminLayout'
import Dashboard from './components_admin/Dashboard';
import Icon from './Pages_admin/Icon';
import Animatedicon from './Pages_admin/Animatedicon';
import Category from './Pages_admin/Category';
import Interface from './Pages_admin/Interface';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserLayout from './components/UserLayout';
import Contact from './pages/Contact';

function App() {
  return (
    <div>

      <Router>

        <Switch >
          <Route exact path='/'>
            <UserLayout>
              <WebBody />
            </UserLayout>
          </Route>
          <Route path='/icons'>
            <UserLayout>

              <Icons />
            </UserLayout>

          </Route>
          <Route path='/interface-icons'>
            <UserLayout>

              <Interfaceicon />
            </UserLayout>

          </Route>
          <Route path='/animated-icons'>
            <UserLayout>

              <Animatedicons />
            </UserLayout>

          </Route>
          <Route path="/most-downloads">
            <UserLayout>

              <Topicon />
            </UserLayout>

          </Route>
          <Route path="/pack">
            <UserLayout>

              <Pack />
            </UserLayout>

          </Route>
          <Route path="/topanimatedicon">
            <UserLayout>

              <Topanimatedicon />
            </UserLayout>

          </Route>
          <Route path="/contact-us">
            <UserLayout>

              <Contact />
            </UserLayout>

          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/admin" >
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </Route>

          <Route path="/admin/icons/icon">
            <AdminLayout>
              <Icon />
            </AdminLayout>
          </Route>

          <Route path="/admin/icons/animated-icon">
            <AdminLayout>
              <Animatedicon />
            </AdminLayout>
          </Route>

          <Route path="/admin/icons/interface-Icon">
            <AdminLayout>
              <Interface />
            </AdminLayout>
          </Route>

          <Route path="/admin/category">
            <AdminLayout>
              <Category />
            </AdminLayout>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
