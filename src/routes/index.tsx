import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';


const Routes: React.FC = () => (
    <switch>
        <Route exact path="/" compontent={Dashboard}/>
      
    </switch>
);

export default Routes;