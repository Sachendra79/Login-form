
import React from 'react';
import {  Route} from 'react-router-dom';
import Login from './Page/Login'
import Signup  from './Page/Signup';
import {Routes,Router} from 'react-router-dom'
import Card from './Page/Card'
import { Children,reverse } from 'react';

function App() {
    return (
    //     <div className='form'>
    //    <Routes>
    //         <Route exact path="/"  element={<Login/>}/>
    //         <Route exact path="/Signup"  element={<Signup/>} />
    //           </Routes>
    //     </div>
    <Router>
<Routes>
    <Route exact path="/" element={<Card reverse={reverse}><section><Signup/></section></Card>}>   </Route>
    <Route exact path="/login" element={<Card children={Children}><section><Login/></section></Card>}>   </Route>
</Routes>
    </Router>
       
    );
}

export default App;
