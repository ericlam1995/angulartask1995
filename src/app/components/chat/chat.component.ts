import { Component, OnInit } from '@angular/core';
import { SwitchserviceService } from 'src/app/service/switchservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  optiondisplay: boolean = false;
  constructor(public switchserv: SwitchserviceService) { }

  ngOnInit(): void {
  }

}
