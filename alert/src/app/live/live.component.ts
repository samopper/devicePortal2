import { Component, OnInit } from '@angular/core';
import { AlertsService} from '../alerts.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  alerts = {};
  
  constructor(private alertService: AlertsService) { 

  }

  ngOnInit() {
    this.alertService.alerts.subscribe(alerts => {
      this.alerts = alerts;
    })
  }

}
