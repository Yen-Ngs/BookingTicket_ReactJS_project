import logo from './logo.svg';
import './App.scss';
import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Service from './pages/Servicebooking/Service'
import Header from './components/Home/Header/Header';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details'
import BookingTicket from './pages/BookingTicket/BookingTicket';
import Register from './pages/Register/Register'
import { HomeTemplate } from './templates/HomeTemplate';
import { createBrowserHistory } from 'history'
import { AdminTemplate } from './templates/AdminTemplate';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        {/* <Header/> */}
        <Switch>
          <HomeTemplate exact path='/home' Component={Home} />
          <HomeTemplate exact path='/contact' Component={Contact} />
          <HomeTemplate exact path='/about' Component={About} />
          <HomeTemplate exact path='/services' Component={Service} />
          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/details/:id' Component={Details} />
          <HomeTemplate exact path='/bookingticket/:id' Component={BookingTicket} />
          <HomeTemplate exact path='/register' Component={Register} />


          <HomeTemplate exact path="/" Component={Home} />


        </Switch>
      </div>

    </Router>

  );
}

export default App;
