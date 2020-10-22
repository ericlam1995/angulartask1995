import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadinghome: boolean = true;
  displayexplore: boolean;
  constructor() { }

  ngOnInit(): void {
    this.settimeoutforloading();
  }

  settimeoutforloading(){
    setTimeout(() => {
      this.loadinghome = false;
    }, 1900);
  }

}
