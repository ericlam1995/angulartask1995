import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  recommendoptopen: boolean = false;
  newactopen: boolean = false;
  weatherboardopen: boolean = false;
  storyoptopen: boolean = false;
  birthdayopen: boolean = false;
  suggestfriendopen: boolean = false;
  jobnotiopen: boolean = false;

  loadingdisplay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle1(){
    this.loadingdisplay = !this.loadingdisplay;
    if(this.loadingdisplay){
      setTimeout(() => {
        this.loadingdisplay = false;
      }, 1800);
    }
  }

}
