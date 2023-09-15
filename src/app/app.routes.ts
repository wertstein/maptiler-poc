import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./nx-welcome.component').then((m) => m.NxWelcomeComponent),
  },
  {
    path: 'map-tile',
    loadComponent: () =>
      import('./components/map-tile/map-tile.component').then(
        (m) => m.MapTileComponent
      ),
  },
  {
    path: 'custom-ng-map-tile',
    loadComponent: () =>
      import(
        './components/custom-ng-map-tile/custom-ng-map-tile.component'
      ).then((m) => m.CustomNgMapTileComponent),
  },
];
