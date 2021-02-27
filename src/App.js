import react from 'react';
// import '../node_modules/react-bootstrap-v5/lib/dist/react-bootstrap';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {Switch,Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
const App=()=>{
  return(
    <>
    <Navbar/>
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/linkedin' component={()=>{
          window.open("https://www.linkedin.com/in/rahul-mane-6614231a0/","_blank");
        }}/>
        <Redirect to='/'/>
    </Switch>
    </>
  );
}

export default App;
