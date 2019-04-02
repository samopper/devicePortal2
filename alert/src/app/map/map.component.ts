import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  latitude: number = 41.24734;
  longitude: number = -72.88653;
  
  alerts = [];
  
  constructor( private alertService:AlertsService) { }

  ngOnInit() {
    this.alertService.alerts.subscribe(a => {
      this.alerts = [];
      a.forEach(alert => {
        if (alert.status == 'New'){
          this.alerts.push(alert);
        }
      });
    })
  }
}
