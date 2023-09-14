import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import * as maptilersdk from '@maptiler/sdk';
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

@Component({
  selector: 'app-map-tile',
  standalone: true,
  imports: [CommonModule, NgxMapLibreGLModule],
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapTileComponent implements OnInit {
  API_KEY = 'QSYSDxrNZoT9kZ7dXfnm';

  readonly markers$ = of(MARKERS);

  ngOnInit(): void {
    maptilersdk.config.apiKey = 'YOUR_MAPTILER_API_KEY_HERE';
  }
}

/**
 * Controls
 * Spatial illusions
 * Elevations
 * Layers
 * Ruler
 * 3D map
 */
