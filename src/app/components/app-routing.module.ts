import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { SpaceshipsComponent } from './spaceships/spaceships.component';


const routes: Routes = [
  { path: 'spaceships', component: SpaceshipsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
