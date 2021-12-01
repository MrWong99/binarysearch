import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scan-overview',
  templateUrl: './scan-overview.component.html',
  styleUrls: ['./scan-overview.component.scss']
})
export class ScanOverviewComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
