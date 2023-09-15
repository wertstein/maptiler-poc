import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import {
  Map,
  NavigationControl,
  Marker,
  FullscreenControl,
  ScaleControl,
} from 'maplibre-gl';
import { API_KEY } from 'src/app/constants';

import * as maptilersdk from '@maptiler/sdk';

@Component({
  selector: 'app-custom-ng-map-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-ng-map-tile.component.html',
  styleUrls: ['./custom-ng-map-tile.component.scss'],
})
export class CustomNgMapTileComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  mapLibre: Map | undefined;

  mapTiler: maptilersdk.Map | undefined;

  @ViewChild('mapMapLibre')
  private mapLibreContainer!: ElementRef<HTMLElement>;

  @ViewChild('mapTiler')
  private mapTilerContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    //
  }

  ngAfterViewInit() {
    const initialState = { lng: 34, lat: 45, zoom: 9 };
    if (0) {
      this.mapLibre = new Map({
        container: this.mapLibreContainer.nativeElement,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,
      });

      this.mapLibre.addControl(new NavigationControl(), 'bottom-right');
      this.mapLibre.addControl(new FullscreenControl(), 'bottom-right');

      this.mapLibre.addControl(
        new ScaleControl({ unit: 'imperial' }),
        'bottom-left'
      );
      this.mapLibre.addControl(
        new ScaleControl({ unit: 'metric' }),
        'bottom-left'
      );

      new Marker({ color: '#FF0000' }).setLngLat([34, 45]).addTo(this.mapLibre);
    } else {
      // MapTiler SDK

      maptilersdk.config.apiKey = API_KEY;

      this.mapTiler = new maptilersdk.Map({
        container: this.mapTilerContainer.nativeElement,
        style: maptilersdk.MapStyle.TOPO,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,
        terrain: true,
        logoPosition: 'bottom-right',
        terrainControl: true,
      });

      (['imperial', 'metric'] as maptilersdk.Unit[]).forEach((unit) => {
        this.mapTiler?.addControl(
          new maptilersdk.ScaleControl({ unit }),
          'bottom-left'
        );
      });

      this.mapTiler.addControl(
        new maptilersdk.FullscreenControl(),
        'top-right'
      );
    }
  }

  ngOnDestroy() {
    this.mapLibre?.remove();
  }
}
