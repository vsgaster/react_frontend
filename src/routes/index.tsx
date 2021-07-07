import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Totais from '../pages/Totais';


const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/totais" component={Totais}/>
      
    </Switch>
);

export default Routes;