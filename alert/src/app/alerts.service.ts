import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AlertsService {
  socket: any;
  private _reports: BehaviorSubject<any[]>
  private dataStore: {
    reports: any
  };

  constructor(private http:HttpClient) { 
    this.socket = io('http://localhost:8080');
    this.socket.on('connect', ()=>{console.log('connected to live alert server')});
    this.socket.on('alert', (data)=>{
      this.dataStore.reports.push(data);
      this._reports.next(Object.assign({}, this.dataStore).reports);
    })
  
    this.dataStore = { reports: [] };
    this._reports = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this.loadAlerts();
  }

  loadAlerts(){
    this.http.get<any>('http://localhost:8090/api/alerts').subscribe((res:Response) => {
      this.dataStore.reports = res;
      this._reports.next(Object.assign({}, this.dataStore).reports);
    }, error => console.log('error could not load reports from api'));
  }

  get alerts() {
    return this._reports.asObservable();
  }

}
