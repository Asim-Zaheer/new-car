import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Cookie from './component/Cookie';
import Reservation from './component/Reservation';
import Extra from './component/Extra';
import Guide from './component/Guide';
// import Signup from './component/Signup';


function AppRouter() {
  return (
    <>
    <Router>
    <Routes>
      {/* <Route path='/' Component={LogSign} /> */}
      {/* <Route path='/' Component={Signup} /> */}
      <Route path='/' Component={Home} />
      <Route path='/home' Component={Home} />
      <Route path='/reservation' Component={Reservation} />
      <Route path='/guide' Component={Guide} />
      <Route path='/extra' Component={Extra} />
      <Route path='/cookie' Component={Cookie} />
      <Route path='/contact' Component={Contact} />

    
    </Routes>
    </Router>
    </>
  )
}

export default AppRouter