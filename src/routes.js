import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './assets/pages/Logon';
import RegisterFreelancer from '../src/assets/pages/RegisterFreelancer';
import RegisterCompany from '../src/assets/pages/RegisterCompany';
import EmailConfirmation from '../src/assets/pages/EmailConfirmation';
import ProfileFreelancer from '../src/assets/pages/ProfileFreelancer';
import ProfileCompany from '../src/assets/pages/ProfileCompany';
import ProfileAdmin from '../src/assets/pages/ProfileAdmin';
import Request from '../src/assets/pages/Task'
import NewRequest from '../src/assets/pages/NewRequest';
import Lading from '../src/assets/pages/Lading';
import NotFound from '../src/assets/components/NotFound';
import Sign from '../src/assets/pages/SignUp';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Lading} exact />
                <Route path="/Logon" component={Logon} />
                <Route path="/register/freelancer" component={RegisterFreelancer} />
                <Route path="/register/company" component={RegisterCompany} />

                <Route path="/sign" component={Sign} />
                <Route path="/email/confirmation" component={EmailConfirmation} />
                <Route path="/freelancer" component={ProfileFreelancer} />
                <Route path="/task" component={ProfileCompany} />
                <Route path="/admin" component={ProfileAdmin} />
                <Route path="/new/request" component={NewRequest} />
                <Route path="/company/profile" component={Request} />
                <Route path="/notFound" component={NotFound} />
                
            </Switch>
        </BrowserRouter>
    )
}