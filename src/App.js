import './App.css';
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nopage from './Components/Nopage/Nopage';
import Header from './Components/Header/Header';
import Explore from './Components/Explore/Explore';
import Purchase from './Components/Purchase/Purchase';
import Register from './Components/Register/Register';
import Authprovider from './Components/AuthProvider/Authprovider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Authprovider className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path='/'><Home></Home></Route>

          <Route path='/home'><Home /></Route>

          <PrivateRoute path='/watch/:id'><Header />
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>

          <Route path='/register'>
            <Header />
            <Register />
          </Route>

          <Route path='/login'>
            <Header />
            <Login />
          </Route>

          <Route path='/explore'>
            <Header />
            <Explore />
          </Route>

          <Route path='*'>
            <Header />
            <Nopage></Nopage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
