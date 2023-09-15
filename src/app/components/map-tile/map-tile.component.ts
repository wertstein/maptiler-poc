import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { of } from 'rxjs';
import { LngLatLike } from 'maplibre-gl';

const MARKERS: { lngLat: LngLatLike }[] = [
  {
    lngLat: [34, 45],
  },
  {
    lngLat: [34.5, 45],
  },
  {
    lngLat: [34.5, 45.3],
  },
  {
    lngLat: [34, 45.3],
  },
];

const API_KEY = 'QSYSDxrNZoT9kZ7dXfnm';

@Component({
  selector: 'app-map-tile',
  standalone: true,
  imports: [CommonModule, NgxMapLibreGLModule],
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapTileComponent {
  readonly markers$ = of(MARKERS);

  readonly layer = `https://api.maptiler.com/maps/topo-v2/style.json?key=${API_KEY}`;
}
