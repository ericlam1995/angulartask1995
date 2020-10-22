import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherboardComponent } from './components/weatherboard/weatherboard.component';
import { FeedComponent } from './components/feed/feed.component';
import { ChatComponent } from './components/chat/chat.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HomeComponent } from './components/home/home.component';
import { SwitchserviceService } from './service/switchservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherboardComponent,
    FeedComponent,
    ChatComponent,
    ExploreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SwitchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
