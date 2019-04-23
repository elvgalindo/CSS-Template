//importing necessary files for the app to work
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './components/home';
import page1 from './components/page1';
import page3 from './components/page3';

//setting function to route each page within the app
 const Routing = () => (
     <Router>
         <Switch>
            <Route exact path="/" component={home}/>
            <Route path="/home" component={home}/>
            <Route path="/page1" component={page1}/>
            <Route path="/page3" component={page3}/>
         </Switch>
     </Router>
 );
 //exporting the routes
export default Routing;
