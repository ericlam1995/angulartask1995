import { Component, Input, OnInit } from '@angular/core';
import { SwitchserviceService } from 'src/app/service/switchservice.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(public switchserv: SwitchserviceService) { }

  ngOnInit(): void {
  }

}
