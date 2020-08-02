import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon, LeafletMouseEvent, LatLng } from 'leaflet';

@Component({
  selector: 'app-mapviewer',
  templateUrl: './mapviewer.component.html',
  styleUrls: ['./mapviewer.component.css']
})
export class MapviewerComponent implements OnInit {

  map: Map;
  mapOptions: MapOptions;

  pointerLat: number;
  pointerLong: number;

  pointerClick: LatLng[] = [];

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
    const marker = new Marker([-22.934172, -43.019888])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
    marker.addTo(this.map);
  }

  /**
   * Ação de movimento do mouse no mapa
   * @param event Evento de clique
   */
  onMouseMove(event: LeafletMouseEvent) {
    this.pointerLat = event.latlng.lat
    this.pointerLong = event.latlng.lng
  }

  /**
   * Ação de clique do mouse no mapa
   * @param event Evento de clique
   */
  onMouseClick(event: LeafletMouseEvent) {
    this.pointerClick.push(event.latlng);
  }
}
