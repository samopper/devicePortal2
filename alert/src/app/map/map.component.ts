import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  latitude: number = 41.24734;
  longitude: number = -72.88653;
  
  alert = {};
  
  constructor() { }

  ngOnInit() {
  }
}
