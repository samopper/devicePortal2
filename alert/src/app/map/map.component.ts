import { Component, OnInit, Input } from '@angular/core';

import { injectTemplateRef } from '@angular/core/src/render3/view_engine_compatibility';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  @Input() selectedAlert: any;

  constructor() { }

  ngOnInit() {
  }
}
