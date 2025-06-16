import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
@ViewChild('mapViewNode', { static: true }) private mapViewEl?: ElementRef;

 async ngOnInit() {

    const [Map, MapView] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
      ]);

      if (!this.mapViewEl?.nativeElement) {
        console.error('Map container element is not available');
        return;
      }

      const map = new Map({
        basemap: 'topo-vector'
      });

      const view = new MapView({
        container: this.mapViewEl.nativeElement,
        map: map,
      center: [13.4050, 52.5200], 
      zoom: 6,
        ui: {
          components: []
        }
      });

  }
}