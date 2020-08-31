import {Routes} from '@angular/router';
import {AuthGuard} from '../../shared/auth-guard/auth.guard';

import { AppOffersComponent } from './offers/app.offers.component';

export const JobBoardRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'offers',
                component: AppOffersComponent,
                // canActivate: [AuthGuard]
            }
        ]
    }
];
