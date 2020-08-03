import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon, LeafletMouseEvent, LatLng } from 'leaflet';

@Component({
  selector: 'app-map-loader',
  templateUrl: './map-loader.component.html',
  styleUrls: ['./map-loader.component.css']
})
export class MapLoaderComponent implements OnInit {

  map: Map;
  mapOptions: MapOptions;
  pointerLat: number;
  pointerLong: number;
  fileToUpload: File = null;

  constructor() { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(-15.793889, -47.882778),
      zoom: 4,
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

  /**
   * Event of map ready
   * @param map Map
   */
  onMapReady(map: Map) {
    this.map = map;
  }

  /**
   * Ação de movimento do mouse no mapa
   * @param event Evento de clique
   */
  onMouseMove(event: LeafletMouseEvent) {
    this.pointerLat = event.latlng.lat
    this.pointerLong = event.latlng.lng
  }

  uploadFile(files: FileList) {
    console.log(">> upload file");
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }
}
