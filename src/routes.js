import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './assets/pages/Logon';
import RegisterFreelancer from '../src/assets/pages/RegisterFreelancer';
import RegisterCompany from '../src/assets/pages/RegisterCompany';
import EmailConfirmation from '../src/assets/pages/EmailConfirmation';
import ProfileFreelancer from '../src/assets/pages/ProfileFreelancer';
import ProfileAdmin from '../src/assets/pages/ProfileAdmin';
import NewTask from '../src/assets/pages/NewRequest';
import Lading from '../src/assets/pages/Lading';
import NotFound from '../src/assets/components/NotFound';
import Sign from '../src/assets/pages/SignUp';
import HowItWorks from '../src/assets/pages/HowItWorks';
import Hired from '../src/assets/pages/Hired';
import Report from '../src/assets/pages/Report';
import Payment from '../src/assets/pages/Payment';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Lading} exact />
                <Route path="/Logon" component={Logon} />
                <Route path="/register/freelancer" component={RegisterFreelancer} />
                <Route path="/register/company" component={RegisterCompany} />

                <Route path="/HowItWorks" component={HowItWorks} />
                <Route path="/sign" component={Sign} />
                <Route path="/email/confirmation" component={EmailConfirmation} />
                <Route path="/freelancer" component={ProfileFreelancer} />
                <Route path="/admin" component={ProfileAdmin} />
                <Route path="/new/request" component={NewTask} />
                <Route path="/company/report" component={Report} />
                <Route path="/company/hired" component={Hired} />
                <Route path="/company/payment" component={Payment} />
                <Route path="/notFound" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}