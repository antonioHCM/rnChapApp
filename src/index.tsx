import {Router} from './navigations';
import React, { useEffect } from 'react';
import { AuthProvider } from './contexts/auth';
import { InitStack } from './navigations/init-navigator';



const App = () =>{

   

   return(
     
      <AuthProvider>
        <Router/>
      </AuthProvider>
    
   )   
}

export default App;