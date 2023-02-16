import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplaysongsComponent } from './displaysongs/displaysongs.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { RegistrationComponent } from './registration/registration.component';
import { StartingpageComponent } from './startingpage/startingpage.component';

const routes: Routes = [
  {path:"DisplayAll",component:DisplaysongsComponent},
  {path:"Favorites",component:FavoriteComponent},
  {path:"Recommend",component:RecommendationComponent},
  {path:"Registration",component:RegistrationComponent},
  {path:"Login",component:LoginComponent},
  {path:"StartingPage",component:StartingpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
