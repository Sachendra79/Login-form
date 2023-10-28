
import React from 'react';
import {  Route} from 'react-router-dom';
import Login from './Page/Login'
import Signup  from './Page/Signup';
import {Routes,BrowserRouter as Router} from 'react-router-dom'
import Card from './Page/Card'
import { Children,reverse } from 'react';

function App() {
    return (
   
    <Router>
<Routes>
    
    <Route exact path="/" element={<Card reverse={reverse}><Signup/></Card>}>   </Route>
    <Route exact path="/login" element={<Card children={Children}><><Login/></></Card>}>   </Route>
    
  
</Routes>
    </Router>
       
    );
}

export default App;
