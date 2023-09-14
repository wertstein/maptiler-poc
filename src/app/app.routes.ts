import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'map-tile',
  },
  {
    path: 'map-tile',
    loadComponent: () =>
      import('./components/map-tile/map-tile.component').then(
        (m) => m.MapTileComponent
      ),
  },
];
