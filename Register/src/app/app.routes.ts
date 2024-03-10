import { Routes } from '@angular/router';
import { ParrentComponent } from './parrent/parrent.component';
import { AdduserComponent } from './parrent/child/adduser/adduser.component';
import { MobileComponent } from './parrent/child/mobile/mobile.component';
import { SuccessfullComponent } from './parrent/child/successfull/successfull.component';

export const routes: Routes = [
    {
      path: '',
      component: ParrentComponent, // this is the component with the <router-outlet> in the template
      children: [
        {
          path: '', // child route path
          component: AdduserComponent, // child route component that the router renders
        },
        {
          path: 'Mobile',
          component: MobileComponent, // another child route component that the router renders
        },
        {
            path: 'Successfull',
            component: SuccessfullComponent, // another child route component that the router renders
          },
      ],
    },
  ];