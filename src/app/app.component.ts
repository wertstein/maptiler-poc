import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'maptiler-poc';
}

/** To investigate
 * Controls +
 * Spatial illusions
 * Elevations
 * Coordinates
 * Search +
 * Layers
 * Instruments (Ruler)
 * 3D map +
 */
