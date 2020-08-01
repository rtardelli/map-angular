import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon } from 'leaflet';

@Component({
  selector: 'app-mapviewer',
  templateUrl: './mapviewer.component.html',
  styleUrls: ['./mapviewer.component.css']
})
export class MapviewerComponent implements OnInit {

  map: Map;
  mapOptions: MapOptions;

  constructor() { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(-22.9464899, -43.0316809),
      zoom: 13,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          }
        )
      ],
    };
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private addSampleMarker() {
    const marker = new Marker([51.51, 0])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
    marker.addTo(this.map);
  }
}
