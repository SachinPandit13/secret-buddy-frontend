import { Routes } from '@angular/router';
import { TabsComponent } from 'src/app/shared';

export const userRoutes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'favourite',
        loadComponent: () =>
          import('./favourite/favourite.page').then((m) => m.FavouritePage),
      },
      {
        path: 'notes',
        loadComponent: () =>
          import('./notes/notes.page').then((m) => m.NotesPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      },
    ],
  },
];
