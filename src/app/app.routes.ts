import { Routes } from '@angular/router';
import { userRoutes } from './pages/user/user.routes';
import { TabsComponent } from './shared';
export const routes: Routes = [
  {
    path: 'tabs',
    children: userRoutes
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];
