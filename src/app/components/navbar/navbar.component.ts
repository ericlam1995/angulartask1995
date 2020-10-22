import { Component, Input, OnInit } from '@angular/core';
import { SwitchserviceService } from 'src/app/service/switchservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  friendrequestopen: boolean = false;
  notifiopen: boolean = false;
  messageopen: boolean = false;
  shopcartopen: boolean = false;
  searchoptionopen: boolean = false;
  accountopen: boolean = false;
  loadshoplist: boolean = true;
  constructor(public switchserv: SwitchserviceService) { }

  ngOnInit(): void {
    this.settimeloadingshop();
  }

  settimeloadingshop(){
  }

  toggle1(){
    this.friendrequestopen = !this.friendrequestopen;
  }

  toggle2(){
    this.notifiopen = !this.notifiopen;
  }
  toggle3(){
    this.messageopen = !this.messageopen;
  }
  toggle4(){
    this.searchoptionopen = !this.searchoptionopen;
  }
  toggle5(){
    this.shopcartopen = !this.shopcartopen;
    if(this.shopcartopen){
      setTimeout(() => {
        this.loadshoplist = false;
      }, 1200);
    }else{
      this.loadshoplist = true;
    }
  }
  toggle6(){
    this.switchserv.displayexplore = !this.switchserv.displayexplore;
    console.log(this.switchserv.displayexplore);
  }
  toggle7(){
    this.switchserv.displaychat = !this.switchserv.displaychat;
  }
}
