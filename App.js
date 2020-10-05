import React from 'react';
import{Route} from 'react-router-dom';
import History from './History';
import Edit from './Edit'
import './Modal.css'

function App() {
  return (
    
       <div >
      <Route path="/"exact={true} component={History}/>
      <Route path="/History" component={History}/>
      <Route path="/History/Edit" component={Edit}/>
    </div>
    
  );
}

export default App;
