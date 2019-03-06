import { Component, OnInit } from '@angular/core';
import { AlertsService} from '../alerts.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  alerts = {};
  logs = [
    {            
      userID: "5c6f662b1c9d44000076556a",
      date: Date.now(),
      status: "-",
      latitude: 41.24734,
      longitude: -72.88653,
      accuracy: 5
    },
    {            
      userID: "5c6f662b1c9d44000076556a",
      date: Date.now(),
      status: "Hello",
      latitude: 41.24734,
      longitude: -72.88653,
      accuracy: 5
    },
    {            
      userID: "5c6f662b1c9d44000076556a",
      date: Date.now(),
      status: "World",
      latitude: 41.24734,
      longitude: -72.88653,
      accuracy: 5
    },
    {            
      userID: "5c6f662b1c9d44000076556a",
      date: Date.now(),
      status: "World",
      latitude: 41.24734,
      longitude: -72.88653,
      accuracy: 5
    },
    {            
      userID: "5c6f662b1c9d44000076556a",
      date: Date.now(),
      status: "World",
      latitude: 41.24734,
      longitude: -72.88653,
      accuracy: 5
    }
  ]
  

  constructor(private alertService: AlertsService) { 

  }

  ngOnInit() {
    this.alertService.alerts.subscribe(alerts => {
      this.alerts = alerts;
    })
  }

}
