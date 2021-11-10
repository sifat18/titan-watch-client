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
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'><Home /></Route>
          {/* <Route path='/'></Route> */}
          <Route path='/purchase'>
            <Header />

          </Route>
          <Route path='/explore'>
            <Header />

          </Route>
          <
            Route path='*'>
            <Header />
            <Nopage></Nopage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
