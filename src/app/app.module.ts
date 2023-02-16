import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { DisplaysongsComponent } from './displaysongs/displaysongs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplaysongsService } from './displaysongs.service';
import { StartingpageComponent } from './startingpage/startingpage.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FavoriteComponent,
    RecommendationComponent,
    DisplaysongsComponent,
    StartingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
